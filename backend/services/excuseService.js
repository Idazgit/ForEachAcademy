import { excuseRepository } from "../repositories/excuseRepository.js";
import { excuse } from "../models/excuseModel.js";

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
};
