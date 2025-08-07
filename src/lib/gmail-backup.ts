// Alternative using Nodemailer with Gmail SMTP
// This approach uses Gmail's SMTP which has higher free limits

import nodemailer from 'nodemailer';

export const sendEmailViaGmail = async (text: string) => {
  const gmailEmail = process.env.GMAIL_EMAIL;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailEmail || !gmailPassword) {
    console.error('Gmail SMTP not configured. Please set GMAIL_EMAIL and GMAIL_APP_PASSWORD environment variables.');
    throw new Error('Gmail backup service not configured');
  }

  // Create transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailEmail,
      pass: gmailPassword,
    },
  });

  const date = new Date();

  const mailOptions = {
    from: gmailEmail,
    to: 'calliwickesphotography@gmail.com',
    subject: `Message from CalliWickesPhotography.com (${date.toLocaleString()}) - Via Backup`,
    text,
  };

  try {
    console.log('Attempting to send email via Gmail SMTP...');
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully via Gmail:', result.messageId);
    return result;
  } catch (error) {
    console.error('Gmail SMTP error:', error);
    throw error;
  }
};
