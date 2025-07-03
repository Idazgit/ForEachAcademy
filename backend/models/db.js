import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";

// 👇 Recréer __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Chemin absolu basé sur le vrai emplacement du fichier
const dbPath = path.resolve(__dirname, "../db/database.sqlite");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("❌ Erreur SQLite :", err.message);
  } else {
    console.log("✅ Connecté à SQLite");
  }
});

export default db;
