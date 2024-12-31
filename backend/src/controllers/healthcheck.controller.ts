import { Request, Response } from "express";

export const getHealthCheck = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).json({
      status: "UP",
      time: new Date().toISOString(),
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
}