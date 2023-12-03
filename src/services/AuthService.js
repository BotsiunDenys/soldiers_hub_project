import api from "../api/api";

export class AuthService {
  static async login({ login, password }) {
    const data = await api.post("auth/login", { login, password });
    return data;
  }

  static async logout({ refreshToken }) {
    const data = await api.post("auth/logout", { refreshToken });
    return data;
  }

  static async registration({ login, password }) {
    const data = await api.post("auth/registration", { login, password });
    return data;
  }

  static async checkAuth({ refreshToken }) {
    const data = await api.get("auth/login", { refreshToken });
    return data;
  }
}
