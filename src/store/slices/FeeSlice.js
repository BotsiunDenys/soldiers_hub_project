import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FeeService } from "../../services/FeeService";

const initalFeesState = {
  fees: [],
  volunteersFees: [],
  rebuildingFees: [],
  militaryFees: [],
  applications: [],
  error: "",
  loading: false,
};

export const getApplications = createAsyncThunk("fees/getApplications", async () => {
  const response = await FeeService.getApplications();
  return response.data;
});

export const getFees = createAsyncThunk("fees/getFees", async () => {
  const response = await FeeService.getFees();
  return response.data;
});

export const acceptApplication = createAsyncThunk("fees/acceptApplication", async (id) => {
  const response = await FeeService.acceptApplication(id);
  return response.data;
});

export const refuseApplication = createAsyncThunk("fees/refuseApplication", async (id) => {
  const response = await FeeService.refuseApplication(id);
  return response.data;
});

export const createApplication = createAsyncThunk("fees/createApplication", async (application) => {
  const response = await FeeService.createApplication(application);
  return response.data;
});

export const getVolunteersFees = createAsyncThunk("fees/getVolunteersFees", async () => {
  const response = await FeeService.getVolunteersFees();
  return response.data;
});

export const getMilitaryFees = createAsyncThunk("fees/getMilitaryFees", async () => {
  const response = await FeeService.getMilitaryFees();
  return response.data;
});

export const getRebuildingFees = createAsyncThunk("fees/getRebuildingFees", async () => {
  const response = await FeeService.getRebuildingFees();
  return response.data;
});

const FeesSlice = createSlice({
  name: "fees",
  initialState: initalFeesState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getApplications.pending, (state) => {
      state.applications = [];
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getApplications.fulfilled, (state, action) => {
      state.loading = false;
      state.applications = action.payload;
    });
    builder.addCase(getApplications.rejected, (state, action) => {
      state.loading = false;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(getFees.pending, (state) => {
      state.fees = [];
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getFees.fulfilled, (state, action) => {
      state.loading = false;
      state.fees = action.payload;
    });
    builder.addCase(getFees.rejected, (state, action) => {
      state.loading = false;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(acceptApplication.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(acceptApplication.fulfilled, (state, action) => {
      state.applications = state.applications.filter(
        (application) => application._id !== action.payload._id,
      );
      state.loading = false;
    });
    builder.addCase(acceptApplication.rejected, (state, action) => {
      state.loading = false;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(refuseApplication.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(refuseApplication.fulfilled, (state, action) => {
      state.applications = state.applications.filter(
        (application) => application._id !== action.payload._id,
      );
      state.loading = false;
    });
    builder.addCase(refuseApplication.rejected, (state, action) => {
      state.loading = false;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(createApplication.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(createApplication.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createApplication.rejected, (state, action) => {
      state.loading = false;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(getVolunteersFees.pending, (state) => {
      state.loading = true;
      state.volunteersFees = [];
      state.error = "";
    });
    builder.addCase(getVolunteersFees.fulfilled, (state, action) => {
      state.loading = false;
      state.volunteersFees = action.payload;
    });
    builder.addCase(getVolunteersFees.rejected, (state, action) => {
      state.loading = false;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(getRebuildingFees.pending, (state) => {
      state.loading = true;
      state.rebuildingFees = [];
      state.error = "";
    });
    builder.addCase(getRebuildingFees.fulfilled, (state, action) => {
      state.loading = false;
      state.rebuildingFees = action.payload;
    });
    builder.addCase(getRebuildingFees.rejected, (state, action) => {
      state.loading = false;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(getMilitaryFees.pending, (state) => {
      state.loading = true;
      state.militaryFees = [];
      state.error = "";
    });
    builder.addCase(getMilitaryFees.fulfilled, (state, action) => {
      state.loading = false;
      state.militaryFees = action.payload;
    });
    builder.addCase(getMilitaryFees.rejected, (state, action) => {
      state.loading = false;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
  },
});

export default FeesSlice.reducer;
