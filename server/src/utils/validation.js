export function sanitizeText(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/[<>]/g, '').replace(/\s+/g, ' ').trim();
}

export function validateContactInput(body) {
  const name = sanitizeText(body?.name);
  const email = sanitizeText(body?.email).toLowerCase();
  const subject = sanitizeText(body?.subject);
  const message =
    typeof body?.message === 'string'
      ? body.message.replace(/[<>]/g, '').trim()
      : '';

  if (name.length < 2 || name.length > 100) {
    return { error: 'Name must be between 2 and 100 characters.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) || email.length > 160) {
    return { error: 'Please provide a valid email address.' };
  }

  if (subject.length < 3 || subject.length > 160) {
    return { error: 'Subject must be between 3 and 160 characters.' };
  }

  if (message.length < 10 || message.length > 4000) {
    return { error: 'Message must be between 10 and 4000 characters.' };
  }

  return {
    data: { name, email, subject, message },
  };
}