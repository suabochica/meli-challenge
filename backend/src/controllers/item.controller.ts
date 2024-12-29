import { Request, Response } from 'express';

import { getItemById } from '@/services/item.service';

export const getItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const item = await getItemById(req.params.id);
    res.status(200).json(item);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};