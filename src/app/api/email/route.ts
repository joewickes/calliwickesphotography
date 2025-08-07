import { sendEmail, signUpForNewsletter } from '@/lib/sendgrid';

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
      await signUpForNewsletter(email);
      return Response.json({ message: 'Newsletter email sent successfully' }, { status: 200 });
    } else {
      email = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\nMessage: ${data.message}`;
      await sendEmail(email);
      return Response.json({ message: 'Contact email sent successfully' }, { status: 200 });
    }
  } catch (error) {
    console.error('API Error:', error);

    // Return proper error response with status code
    return Response.json({ message: 'Failed to send email. Please try again later.' }, { status: 500 });
  }
}
