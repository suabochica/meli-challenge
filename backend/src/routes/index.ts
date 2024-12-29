import { Router } from "express";

import itemRoutes from "@/routes/item.routes";
import categoryRoutes from "@/routes/category.routes";

const router = Router();

router.use("/items", itemRoutes);
router.use("/categories", categoryRoutes);

export default router;
