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
};
