import { Router } from "express";

import healtCheckRoutes from "@/routes/healthcheck.routes";
import itemRoutes from "@/routes/item.routes";
import categoryRoutes from "@/routes/category.routes";

const router = Router();

router.use("/health", healtCheckRoutes);
router.use("/items", itemRoutes);
router.use("/categories", categoryRoutes);

export default router;
