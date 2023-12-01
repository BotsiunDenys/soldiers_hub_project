import api from "../api/api";

export class FeeService {
  static async getApplications() {
    const data = await api.get("fee/applications");
    return data;
  }

  static async getFees() {
    const data = await api.get("fee/getFees");
    return data;
  }

  static async acceptApplication(id) {
    const data = await api.put(`fee/acceptApplication/${id}`);
    return data;
  }

  static async refuseApplication(id) {
    const data = await api.delete(`fee/refuseApplication/${id}`);
    return data;
  }

  static async createApplication(info) {
    const data = await api.post("fee/createApplication", info);
    return data;
  }
}
