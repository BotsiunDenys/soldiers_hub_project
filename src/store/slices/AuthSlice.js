import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthService } from "../../services/AuthService";

const initialAuthState = {
  user: "",
  isLogged: false,
  loading: false,
  error: "",
};

export const login = createAsyncThunk("auth/login", async ({ login, password }) => {
  const response = await AuthService.login({ login, password });
  return response.data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  const response = await AuthService.logout({ refreshToken });
  return response.data;
});

export const registration = createAsyncThunk("auth/registration", async ({ login, password }) => {
  const response = await AuthService.registration({ login, password });
  return response.data;
});

export const checkAuth = createAsyncThunk("auth/checkAuth", async ({ refreshToken }) => {
  const response = await AuthService.checkAuth({ refreshToken });
  return response.data;
});

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLogged = false;
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user.login;
      state.isLogged = true;
      state.loading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLogged = false;
      state.loading = false;
      if (action.error.message) {
        state.error = action.error.message;
      }
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
      state.user = action.payload.user.login;
      state.isLogged = true;
      state.loading = false;
    });
    builder.addCase(registration.rejected, (state, action) => {
      state.isLogged = false;
      state.loading = false;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(checkAuth.pending, (state) => {
      state.isLogged = false;
      state.loading = true;
    });
    builder.addCase(checkAuth.fulfilled, (state) => {
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
