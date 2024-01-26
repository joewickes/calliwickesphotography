import sgMail from '@sendgrid/mail';
export const sendEmail = async (text: string) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

  const date = new Date();

  const msg = {
    to: 'calliwickesphotography@gmail.com', // Change to your recipient
    from: 'calliwickesphotography@gmail.com', // Change to your verified sender
    subject: `Inquiry from CalliWickesPhotography.com (${date.toLocaleString()})`,
    text,
    // html: "<strong>TEST</strong>",
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
  }
};
