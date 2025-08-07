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
  const apiKey = process.env.SENDGRID_API_KEY;

  if (!apiKey) {
    console.error('SENDGRID_API_KEY environment variable is not set');
    throw new Error('Email service not configured');
  }

  sgMail.setApiKey(apiKey);

  const date = new Date();

  const msg = {
    to: 'calliwickesphotography@gmail.com',
    from: 'calliwickesphotography@gmail.com', // Ensure this is a verified sender in SendGrid
    subject: `Message from CalliWickesPhotography.com (${date.toLocaleString()})`,
    text,
  };

  try {
    console.log('Attempting to send email via SendGrid...');
    const response = await sgMail.send(msg);
    console.log('Email sent successfully:', response[0].statusCode);
    return response;
  } catch (error) {
    console.error('SendGrid error:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
    }
    throw error; // Re-throw to allow API handler to respond appropriately
  }
};
