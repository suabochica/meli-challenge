import { Router } from 'express';

import itemRoutes from '@/routes/item.routes';

const router = Router();

router.use('/items', itemRoutes);

export default router;