import sgMail from '@sendgrid/mail';

const RECIPIENT = 'calliwickesphotography@gmail.com';
const SENDER = 'calliwickesphotography@gmail.com'; // Must be a verified sender in SendGrid

function configureSendGrid() {
  const apiKey = process.env.SENDGRID_API_KEY;

  if (!apiKey) {
    throw new Error('Email service not configured: SENDGRID_API_KEY is not set');
  }

  if (!apiKey.startsWith('SG.')) {
    throw new Error('Invalid email service configuration: SENDGRID_API_KEY must start with "SG."');
  }

  sgMail.setApiKey(apiKey);
}

function translateSendGridError(error: unknown): Error {
  if (error instanceof Error) {
    if (error.message.includes('401')) {
      return new Error('SendGrid authentication failed - API key is invalid or expired');
    }
    if (error.message.includes('403')) {
      return new Error('SendGrid permission denied - API key lacks required permissions');
    }
    if (error.message.includes('from email')) {
      return new Error('SendGrid sender email not verified - verify the sender email in SendGrid');
    }
    return error;
  }
  return new Error('Unknown SendGrid error');
}

export const signUpForNewsletter = async (text: string) => {
  configureSendGrid();

  const msg = {
    to: RECIPIENT,
    from: SENDER,
    subject: `Newsletter Sign Up from CalliWickesPhotography.com (${new Date().toLocaleString()})`,
    text,
  };

  try {
    return await sgMail.send(msg);
  } catch (error) {
    throw translateSendGridError(error);
  }
};

export const sendEmail = async (text: string) => {
  configureSendGrid();

  const msg = {
    to: RECIPIENT,
    from: SENDER,
    subject: `Message from CalliWickesPhotography.com (${new Date().toLocaleString()})`,
    text,
  };

  try {
    return await sgMail.send(msg);
  } catch (error) {
    throw translateSendGridError(error);
  }
};
