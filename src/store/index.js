import { configureStore } from "@reduxjs/toolkit";
import feesReducer from "./slices/FeeSlice";
import authReducer from "./slices/AuthSlice";

const rootReducer = { fees: feesReducer, auth: authReducer };

export const store = configureStore({ reducer: rootReducer });
