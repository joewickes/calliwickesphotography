export async function POST(req: Request) {
  const data = await req.json();

  let email = '';

  try {
    if (data.newsletter) {
      email = `Name: ${data.name}\nEmail: ${data.email}`;
      // await signUpForNewsletter(data.email);
      return Response.json({ message: 'Email sent successfully' }, { status: 200 });
    } else {
      email = `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`;
      // await sendEmail(email);
      return Response.json({ message: 'Email sent successfully' }, { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return Response.json({ message: 'Internal Server Error' });
  }
}
