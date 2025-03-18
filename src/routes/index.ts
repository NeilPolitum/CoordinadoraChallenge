import { Router } from 'express';
import authRoutes from './authRoutes';
import mainRoutes from './mainRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/', mainRoutes);

export default router;
