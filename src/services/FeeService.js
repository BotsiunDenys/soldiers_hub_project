import api from "../api/api";

export class FeeService {
  static async getApplications() {
    const data = await api.get("fee/applications", {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  }

  static async getFees() {
    const data = await api.get("fee/getFees");
    return data;
  }

  static async getMilitaryFees() {
    const data = await api.get("fee/getMilitaryFees");
    return data;
  }

  static async getVolunteersFees() {
    const data = await api.get("fee/getVolunteersFees");
    return data;
  }

  static async getRebuildingFees() {
    const data = await api.get("fee/getRebuildingFees");
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
