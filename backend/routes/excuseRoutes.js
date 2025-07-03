import express from "express";
import { excuseController } from "../controllers/excuseController.js";

const router = express.Router();

// Route pour récupérer toutes les excuses
router.get("/", excuseController.getAllExcuses);

export default router;
