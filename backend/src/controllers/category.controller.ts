import { Request, Response } from "express";

import { getCategoryById } from "@/services/category.service";

export const getCategory = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const category = await getCategoryById(req.params.id);
    res.status(200).json(category);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};
