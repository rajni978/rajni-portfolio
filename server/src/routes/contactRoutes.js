import { Router } from 'express';
import { createContactMessage } from '../controllers/contactController.js';
import { contactRateLimiter } from '../middleware/rateLimiter.js';

const router = Router();

router.post('/', contactRateLimiter, createContactMessage);

export default router;