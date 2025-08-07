import { sendEmail, signUpForNewsletter } from '@/lib/sendgrid';
import { sendEmailViaGmail } from '@/lib/gmail-backup';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Input validation
    if (!data.name || !data.email || !data.message) {
      return Response.json(
        { message: 'Missing required fields: name, email, and message are required' },
        { status: 400 },
      );
    }

    let email = '';

    if (data.newsletter) {
      email = `Name: ${data.name}\nEmail: ${data.email}`;

      try {
        await signUpForNewsletter(email);
        return Response.json({ message: 'Newsletter email sent successfully' }, { status: 200 });
      } catch (sendgridError) {
        console.log('SendGrid failed, trying Gmail backup for newsletter...');
        await sendEmailViaGmail(email);
        return Response.json({ message: 'Newsletter email sent successfully via backup' }, { status: 200 });
      }
    } else {
      email = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\nMessage: ${data.message}`;

      try {
        await sendEmail(email);
        return Response.json({ message: 'Contact email sent successfully' }, { status: 200 });
      } catch (sendgridError) {
        console.log('SendGrid failed, trying Gmail backup for contact form...');
        console.error('SendGrid error:', sendgridError);

        try {
          await sendEmailViaGmail(email);
          return Response.json({ message: 'Contact email sent successfully via backup' }, { status: 200 });
        } catch (gmailError) {
          console.error('Gmail backup also failed:', gmailError);
          return Response.json(
            { message: 'Failed to send email. Both primary and backup services are unavailable.' },
            { status: 500 },
          );
        }
      }
    }
  } catch (error) {
    console.error('API Error:', error);

    // Return proper error response with status code
    return Response.json({ message: 'Failed to send email. Please try again later.' }, { status: 500 });
  }
}
