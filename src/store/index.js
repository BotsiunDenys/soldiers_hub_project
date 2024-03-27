import { configureStore } from "@reduxjs/toolkit";
import feesReducer from "./slices/FeeSlice";
import authReducer from "./slices/AuthSlice";
import defendersReducer from "./slices/DefenderSlice";

const rootReducer = { fees: feesReducer, auth: authReducer, defenders: defendersReducer };

export const store = configureStore({ reducer: rootReducer });
