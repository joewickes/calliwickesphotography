import { sendEmail, signUpForNewsletter } from '@/lib/sendgrid';

export async function POST(req: Request) {
  const data = await req.json();

  let email = '';

  try {
    if (data.newsletter) {
      email = `Name: ${data.name}\nEmail: ${data.email}`;
      await signUpForNewsletter(email);
      return Response.json({ message: 'Newsletter email sent successfully' }, { status: 200 });
    } else {
      email = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`;
      await sendEmail(email);
      return Response.json({ message: 'Contact email sent successfully' }, { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return Response.json({ message: 'Internal Server Error' });
  }
}
