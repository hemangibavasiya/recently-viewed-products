import { Router } from 'express';
const router = Router();
import { addProduct } from '../../controllers/productController.js';

// Add product
router.post('/', addProduct);

export default router;