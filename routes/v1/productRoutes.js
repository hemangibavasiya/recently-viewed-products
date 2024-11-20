import { Router } from 'express';
const router = Router();
import { addProduct } from '../../controllers/productController.js';

router.post('/', addProduct);

export default router;