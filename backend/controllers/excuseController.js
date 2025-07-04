import { excuseService } from "../services/excuseService.js";

export const excuseController = {
  async getAllExcuses(req, res) {
    try {
      const excuses = await excuseService.getAllExcuses();
      res.json(excuses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getExcuseByHttp(req, res) {
    try {
      const excuse = await excuseService.getExcuseByHttp(req.params.http_code);
      if (!excuse) {
        return res.status(404).json({ error: "Excuse non trouvé" });
      }
      res.json(excuse);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async randomExcuse(req, res) {
    try {
      const excuse = await excuseService.randomExcuse();
      res.json(excuse);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createExcuse(req, res) {
    // Maintenant dans mon Controller je viens chercher la requête du body et la vérifier, je lui demande de rejeter les requêtes
    // de http_code qui ne sont pas des nombres et d'envoyer un message d'erreur
    try {
      const { http_code, tag, message } = req.body;

      if (!/^\d+$/.test(http_code)) {
        return res
          .status(400)
          .json({ error: "Le code HTTP doit être un nombre." });
      }

      // Je rajoute un vérif pour ne pas recréer des http_code déjà présent grâce a ma méthode getExcuseByHttp
      const existingExcuse = await excuseService.getExcuseByHttp(http_code);
      if (existingExcuse) {
        return res
          .status(409)
          .json({ error: "Une excuse avec ce code Http existe déjà" });
      }

      const excuse = await excuseService.createExcuse({
        http_code,
        tag,
        message,
      });
      res.status(201).json(excuse);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};
