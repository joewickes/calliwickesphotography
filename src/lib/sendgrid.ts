import sgMail from '@sendgrid/mail';

export const signUpForNewsletter = async (text: string) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

  const date = new Date();

  const msg = {
    to: 'calliwickesphotography@gmail.com', // Change to your recipient
    from: 'calliwickesphotography@gmail.com', // Change to your verified sender
    subject: `Newsletter Sign Up from CalliWickesPhotography.com (${date.toLocaleString()})`,
    text,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
  }
};

export const sendEmail = async (text: string) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

  const date = new Date();

  const msg = {
    to: 'calliwickesphotography@gmail.com', // Change to your recipient
    from: 'calliwickesphotography@gmail.com', // Change to your verified sender
    subject: `Message from CalliWickesPhotography.com (${date.toLocaleString()})`,
    text,
    // html: "<strong>TEST</strong>",
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
  }
};
