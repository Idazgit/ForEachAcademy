import express from "express";
import excuseRoutes from "./routes/excuseRoutes.js";

const app = express();
const PORT = 5000;

// Middleware pour lire le JSON
app.use(express.json());

//Route de base du server
app.get("/", (req, res) => {
  res.send("Salut bienvenue a tous sur ma Bdd d'excuse 😭😖");
});

// Importation des routes d'excuses
app.use("/excuses", excuseRoutes);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
