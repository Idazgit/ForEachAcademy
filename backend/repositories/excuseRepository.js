import db from "../models/db.js";

export const excuseRepository = {
  // FindAll basique pou récupérer l'entièrété des données dans la table excuses
  findAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM excuses", [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  },
  // Je me suis inspiré de findById mais je me suis dis que pour le cas actuel, le http_code serait plus cohérent
  findByHttp(http_code) {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT * FROM excuses WHERE http_code = ?",
        [http_code],
        (err, row) => {
          if (err) reject(err);
          else resolve(row);
        }
      );
    });
  },
  // Je créer une requete random excuse pour ensuite lors du clique exploiter cette route ce qui permet de ne pas charger toute la bdd au premier appel
  randomExcuse() {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT * FROM excuses ORDER BY RANDOM() LIMIT 1",
        [],
        (err, row) => {
          if (err) reject(err);
          else resolve(row);
        }
      );
    });
  },
};
