// Fallback sender using Nodemailer over Gmail SMTP.
// Used when the primary SendGrid send fails (Gmail SMTP has higher free limits).

import nodemailer from 'nodemailer';

const RECIPIENT = 'calliwickesphotography@gmail.com';

export const sendEmailViaGmail = async (text: string) => {
  const gmailEmail = process.env.GMAIL_EMAIL;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailEmail || !gmailPassword) {
    throw new Error('Gmail backup service not configured: set GMAIL_EMAIL and GMAIL_APP_PASSWORD');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailEmail,
      pass: gmailPassword,
    },
  });

  const mailOptions = {
    from: gmailEmail,
    to: RECIPIENT,
    subject: `Message from CalliWickesPhotography.com (${new Date().toLocaleString()}) - Via Backup`,
    text,
  };

  return transporter.sendMail(mailOptions);
};
