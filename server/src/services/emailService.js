import nodemailer from 'nodemailer';

export function isEmailConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.CONTACT_RECEIVER_EMAIL
  );
}

export async function sendContactEmail({ name, email, subject, message }) {
  if (!isEmailConfigured()) {
    const err = new Error(
      'Email service is not configured on the server. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_RECEIVER_EMAIL in server/.env.'
    );
    err.statusCode = 503;
    err.code = 'EMAIL_NOT_CONFIGURED';
    throw err;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER_EMAIL,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `New message from ${name} (${email}):\n\n${message}`,
  });
}