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
};
