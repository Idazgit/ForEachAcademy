import { excuseRepository } from "../repositories/excuseRepository.js";
import { Excuse } from "../models/excuseModel.js";

export const excuseService = {
  async getAllExcuses() {
    return await excuseRepository.findAll();
  },

  async getExcuseByHttp(http_code) {
    return await excuseRepository.findByHttp(http_code);
  },

  async randomExcuse() {
    return await excuseRepository.randomExcuse();
  },
  async createExcuse(data) {
    const excuse = new Excuse(data.http_code, data.tag, data.message);
    const validation = excuse.isValid();
    if (!validation.valid) throw new Error(validation.message);
    return await excuseRepository.createExcuse(excuse);
  },
};
