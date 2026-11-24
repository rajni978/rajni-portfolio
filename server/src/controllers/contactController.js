import Contact from '../models/Contact.js';
import { validateContactInput } from '../utils/validation.js';
import { sendContactEmail } from '../services/emailService.js';

export async function createContactMessage(req, res, next) {
  try {
    const { error, data } = validateContactInput(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error });
    }

    const contactDoc = await Contact.create(data);

    await sendContactEmail(data);

    contactDoc.emailDelivered = true;
    await contactDoc.save();

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      id: contactDoc._id,
    });
  } catch (err) {
    return next(err);
  }
}