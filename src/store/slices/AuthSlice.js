import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthService } from "../../services/AuthService";
import axios from "axios";
import { API_URL } from "../../api/api";

const initialAuthState = {
  user: "",
  isAdmin: false,
  isLogged: false,
  loading: false,
  error: "",
};

export const login = createAsyncThunk("auth/login", async ({ login, password }) => {
  try {
    const response = await AuthService.login({ login, password });
    localStorage.setItem("token", response.data.accessToken);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  const response = await AuthService.logout();
  localStorage.removeItem("token");
  return response.data;
});

export const registration = createAsyncThunk(
  "auth/registration",
  async ({ login, password, isAdmin }) => {
    try {
      const response = await AuthService.registration({ login, password, isAdmin });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
);

export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
  const response = await axios.get(`${API_URL}auth/refresh`, { withCredentials: true });
  localStorage.setItem("token", response.data.accessToken);
  return response.data;
});

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLogged = false;
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload.message) {
        state.error = action.payload.message;
      } else {
        state.user = action.payload.user.login;
        state.isAdmin = action.payload.user.isAdmin;
        state.isLogged = true;
        state.error = "";
      }
      state.loading = false;
    });
    builder.addCase(logout.pending, (state) => {
      state.isLogged = false;
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = "";
      state.isLogged = false;
      state.loading = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isLogged = false;
      state.loading = false;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(registration.pending, (state) => {
      state.isLogged = false;
      state.loading = true;
    });
    builder.addCase(registration.fulfilled, (state, action) => {
      // state.user = action.payload.user.login;
      // state.isLogged = true;
      // state.loading = false;

      if (action.payload.message) {
        state.error = action.payload.message;
      } else {
        state.user = action.payload.user.login;
        state.isLogged = true;
        state.error = "";
      }
      state.loading = false;
    });
    // builder.addCase(registration.rejected, (state, action) => {
    //   state.isLogged = false;
    //   state.loading = false;
    //   if (action.error.message) {
    //     state.error = action.error.message;
    //   }
    // });
    builder.addCase(checkAuth.pending, (state) => {
      state.isLogged = false;
      state.loading = true;
    });
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.user = action.payload.user.login;
      state.isAdmin = action.payload.user.isAdmin;
      state.isLogged = true;
      state.loading = false;
    });
    builder.addCase(checkAuth.rejected, (state, action) => {
      state.isLogged = false;
      state.loading = false;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
  },
});

export default AuthSlice.reducer;
export const { setError } = AuthSlice.actions;
