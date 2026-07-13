import { sendEmail, signUpForNewsletter } from '@/lib/sendgrid';
import { sendEmailViaGmail } from '@/lib/gmail-backup';
import { isRateLimited, validateContactRequest } from '@/lib/contact-request';

function clientKey(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  return forwarded?.split(',')[0]?.trim() || 'unknown';
}

export async function POST(req: Request) {
  if (isRateLimited(clientKey(req))) {
    return Response.json({ message: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  let data: unknown;
  try {
    data = await req.json();
  } catch {
    return Response.json({ message: 'Invalid request body' }, { status: 400 });
  }

  const result = validateContactRequest(data);
  if (!result.ok) {
    return Response.json({ message: result.error }, { status: 400 });
  }

  const { name, email, phone, message, newsletter } = result.value;

  if (newsletter) {
    const body = `Name: ${name}\nEmail: ${email}`;
    return sendWithFallback(body, 'Newsletter', signUpForNewsletter);
  }

  const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nMessage: ${message}`;
  return sendWithFallback(body, 'Contact', sendEmail);
}

async function sendWithFallback(body: string, label: string, primarySend: (text: string) => Promise<unknown>) {
  try {
    await primarySend(body);
    return Response.json({ message: `${label} email sent successfully` }, { status: 200 });
  } catch (primaryError) {
    console.error(`SendGrid failed for ${label.toLowerCase()} form, trying Gmail backup:`, primaryError);
    try {
      await sendEmailViaGmail(body);
      return Response.json({ message: `${label} email sent successfully via backup` }, { status: 200 });
    } catch (backupError) {
      console.error(`Gmail backup also failed for ${label.toLowerCase()} form:`, backupError);
      return Response.json(
        { message: 'Failed to send email. Both primary and backup services are unavailable.' },
        { status: 500 },
      );
    }
  }
}
