import { Router } from "express";
import { getItem, searchItems } from "@/controllers/item.controller";

const router = Router();

router.get("", searchItems);
router.get("/:id", getItem);

export default router;
