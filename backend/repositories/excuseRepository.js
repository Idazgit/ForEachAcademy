import db from "../models/db.js";

export const excuseRepository = {
  findAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM excuses", [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  },
};
