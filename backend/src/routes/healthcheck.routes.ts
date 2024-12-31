import { Router } from "express";
import { getHealthCheck } from "@/controllers/healthcheck.controller";

const router = Router();

router.get("/", getHealthCheck);

export default router;
