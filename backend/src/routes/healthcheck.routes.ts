import { Router } from "express";
import { getHealtCheck } from "@/controllers/healthcheck.controller";

const router = Router();

router.get("/", getHealtCheck);

export default router;
