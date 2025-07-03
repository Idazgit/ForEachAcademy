import express from "express";
import { excuseController } from "../controllers/excuseController.js";

const router = express.Router();

// Route pour récupérer toutes les excuses
router.get("/", excuseController.getAllExcuses);

// Route pour récupérer aléatoirement un élément de ma table excuse
router.get("/random", excuseController.randomExcuse);

// Route pour récupérer l'excuse par son code HTTP
router.get("/:http_code", excuseController.getExcuseByHttp);

// Route de création d'une nouvelle excuse
router.post("/create", excuseController.createExcuse);

export default router;

// je viens de découvrir qu'il y avait une importance dans l'ordre des routes, car si je mets la route http avant le random, cela ne fonctionne pas
// car il croit que c'est une requête de http_code
