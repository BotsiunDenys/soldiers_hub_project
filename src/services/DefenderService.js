import api from "../api/api";

export class DefenderService {
  static async getDefenders() {
    const data = await api.get("defender/defenders");
    return data;
  }

  static async getFallenDefenders() {
    const data = await api.get("defender/fallenDefenders");
    return data;
  }

  static async createDefender(info) {
    const data = await api.post("defender/createDefender", info, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
  }

  static async createFallenDefender(info) {
    const data = await api.post("defender/createFallenDefender", info, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
  }

  static async deleteDefender(id) {
    const data = await api.delete(`defender/deleteDefender/${id}`);
    return data;
  }

  static async deleteFallenDefender(id) {
    const data = await api.delete(`defender/deleteFallenDefender/${id}`);
    return data;
  }
}
