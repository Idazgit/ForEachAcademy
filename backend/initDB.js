const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "db", "database.sqlite");
const db = new sqlite3.Database(dbPath);

// Lire le fichier JSON
const excusesPath = path.join(__dirname, "db", "data", "excuses.json");
const rawData = fs.readFileSync(excusesPath);
const excuses = JSON.parse(rawData);

// Créer la table et insérer les excuses
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS excuses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      http_code INTEGER,
      tag TEXT,
      message TEXT
    )
  `);

  db.run("DELETE FROM excuses");

  const stmt = db.prepare(
    "INSERT INTO excuses (http_code, tag, message) VALUES (?,?,?)"
  );

  excuses.forEach((excuse) => {
    stmt.run(excuse.http_code, excuse.tag, excuse.message);
  });

  stmt.finalize();

  console.log("✅ Base de données initialisée avec succès.");
  db.close();
});
