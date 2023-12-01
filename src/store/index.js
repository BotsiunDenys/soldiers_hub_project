import { configureStore } from "@reduxjs/toolkit";
import feesReducer from "./slices/FeeSlice";

const rootReducer = { fees: feesReducer };

export const store = configureStore({ reducer: rootReducer });
