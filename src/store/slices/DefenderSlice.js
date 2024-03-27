import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DefenderService } from "../../services/DefenderService";

const initalDefendersState = {
  defenders: [],
  fallenDefenders: [],
  creationSuccess: false,
  error: "",
  loading: false,
};

export const getDefenders = createAsyncThunk("defenders/getDefender", async () => {
  const response = await DefenderService.getDefenders();
  return response.data;
});

export const getFallenDefenders = createAsyncThunk("defenders/getFallenDefender", async () => {
  const response = await DefenderService.getFallenDefenders();
  return response.data;
});

export const deleteDefender = createAsyncThunk("defenders/deleteDefender", async (id) => {
  const response = await DefenderService.deleteDefender(id);
  return response.data;
});

export const deleteFallenDefender = createAsyncThunk(
  "defenders/deleteFallenDefender",
  async (id) => {
    const response = await DefenderService.deleteFallenDefender(id);
    return response.data;
  },
);

export const createDefender = createAsyncThunk("defenders/createDefender", async (application) => {
  const response = await DefenderService.createDefender(application);
  return response.data;
});

export const createFallenDefender = createAsyncThunk(
  "defenders/createFallenDefender",
  async (application) => {
    const response = await DefenderService.createFallenDefender(application);
    return response.data;
  },
);

const DefendersSlice = createSlice({
  name: "defenders",
  initialState: initalDefendersState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDefenders.pending, (state) => {
      state.defenders = [];
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getDefenders.fulfilled, (state, action) => {
      state.loading = false;
      state.defenders = action.payload;
    });
    builder.addCase(getDefenders.rejected, (state, action) => {
      state.loading = false;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(getFallenDefenders.pending, (state) => {
      state.fallenDefenders = [];
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getFallenDefenders.fulfilled, (state, action) => {
      state.loading = false;
      state.fallenDefenders = action.payload;
    });
    builder.addCase(getFallenDefenders.rejected, (state, action) => {
      state.loading = false;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(deleteDefender.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteDefender.fulfilled, (state, action) => {
      state.defenders = state.defenders.filter((defender) => defender._id !== action.payload._id);
      state.loading = false;
    });
    builder.addCase(deleteDefender.rejected, (state, action) => {
      state.loading = false;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(deleteFallenDefender.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteFallenDefender.fulfilled, (state, action) => {
      state.fallenDefenders = state.fallenDefenders.filter(
        (defender) => defender._id !== action.payload._id,
      );
      state.loading = false;
    });
    builder.addCase(deleteFallenDefender.rejected, (state, action) => {
      state.loading = false;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(createDefender.pending, (state) => {
      state.loading = true;
      state.creationSuccess = false;
      state.error = "";
    });
    builder.addCase(createDefender.fulfilled, (state) => {
      state.creationSuccess = true;
      state.loading = false;
    });
    builder.addCase(createDefender.rejected, (state, action) => {
      state.loading = false;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(createFallenDefender.pending, (state) => {
      state.loading = true;
      state.creationSuccess = false;
      state.error = "";
    });
    builder.addCase(createFallenDefender.fulfilled, (state) => {
      state.creationSuccess = true;
      state.loading = false;
    });
    builder.addCase(createFallenDefender.rejected, (state, action) => {
      state.loading = false;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
  },
});

export default DefendersSlice.reducer;
