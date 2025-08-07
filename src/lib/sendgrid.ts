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

  // Enhanced debugging
  console.log('=== SendGrid Debug Info ===');
  console.log('Raw API Key:', apiKey);
  console.log('API Key length:', apiKey?.length || 0);
  console.log('API Key starts with SG.:', apiKey?.startsWith('SG.'));
  console.log('Environment check:', {
    NODE_ENV: process.env.NODE_ENV,
    hasApiKey: !!apiKey,
  });

  if (!apiKey) {
    console.error('SENDGRID_API_KEY environment variable is not set');
    throw new Error('Email service not configured');
  }

  if (!apiKey.startsWith('SG.')) {
    console.error('Invalid SendGrid API key format. Must start with "SG."');
    throw new Error('Invalid email service configuration');
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
    console.log('API Key present:', !!apiKey);
    console.log('API Key format valid:', apiKey.startsWith('SG.'));

    const response = await sgMail.send(msg);
    console.log('Email sent successfully:', response[0].statusCode);
    return response;
  } catch (error) {
    console.error('SendGrid error details:', error);

    // More specific error handling for common SendGrid issues
    if (error instanceof Error) {
      console.error('Error message:', error.message);

      // Check for specific SendGrid error codes
      if (error.message.includes('401')) {
        throw new Error('SendGrid authentication failed - API key is invalid or expired');
      } else if (error.message.includes('403')) {
        throw new Error('SendGrid permission denied - API key lacks required permissions');
      } else if (error.message.includes('from email')) {
        throw new Error('SendGrid sender email not verified - please verify your sender email in SendGrid');
      }
    }

    throw error; // Re-throw to allow API handler to respond appropriately
  }
};
