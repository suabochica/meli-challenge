import { Router } from 'express';
import { getItem } from '@/controllers/item.controller';

const router = Router();

router.get('/:id', getItem);

export default router;