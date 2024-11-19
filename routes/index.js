import { Router } from 'express';

const router = Router();
import v1Routes from './v1/index.js';
router.use('/v1', v1Routes);

export default router;