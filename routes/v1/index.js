import { Router } from 'express';

const router = Router();
import userRoutes from './userRoutes.js';
import productRoutes from './productRoutes.js';

router.use('/user', userRoutes);
router.use('/product', productRoutes);

export default router;