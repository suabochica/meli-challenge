import express from "express";
import cors from "cors";

import routes from "@/routes/index";

const app = express();
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}

// Middleware
app.use(cors(corsOptions));

// Routes
app.use("/api", routes);

export default app;
