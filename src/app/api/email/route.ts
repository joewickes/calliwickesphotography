import { sendEmail } from '@/lib/sendgrid';
// import sgMail from "@/lib/sendgrid";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   await sgMail();

//   return res.status(200).json({ message: "Email sent successfully" });
// }

export async function POST(req: Request) {
  const data = await req.json();

  const email = `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`;

  try {
    await sendEmail(email);
    return Response.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ message: 'Internal Server Error' });
  }
}
