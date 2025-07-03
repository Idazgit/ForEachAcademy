import { excuseRepository } from "../repositories/excuseRepository.js";
import { excuse } from "../models/excuseModel.js";

export const excuseService = {
  async getAllExcuses() {
    return await excuseRepository.findAll();
  },
};
