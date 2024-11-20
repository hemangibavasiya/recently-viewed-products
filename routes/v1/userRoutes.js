import { Router } from 'express';
const router = Router();
import { getRecentlyViewedProduct } from '../../controllers/userController.js';
import authMiddleware from '../../middlewares/authMiddleware.js';

router.get('/:userId/recentlyViewed', authMiddleware, getRecentlyViewedProduct);

export default router;