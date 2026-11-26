
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export function isEmailConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY &&
    process.env.CONTACT_RECEIVER_EMAIL
  );
}

export async function sendContactEmail({ name, email, subject, message }) {
  if (!isEmailConfigured()) {
    const err = new Error('Email service is not configured.');
    err.statusCode = 503;
    err.code = 'EMAIL_NOT_CONFIGURED';
    throw err;
  }

  const { data, error } = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: process.env.CONTACT_RECEIVER_EMAIL,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `New message from ${name} (${email}):\n\n${message}`,
  });

  if (error) {
    const err = new Error(error.message);
    err.statusCode = 502;
    err.code = 'EMAIL_SEND_FAILED';
    throw err;
  }

  return data;
}
