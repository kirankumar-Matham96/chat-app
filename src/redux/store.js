import { configureStore } from "@reduxjs/toolkit";
import { chatReducer } from "./reducers/chatSlice";

/**
 * Configures and creates the Redux store.
 *
 * @type {import('@reduxjs/toolkit').ConfigureStoreOptions}
 */
export const store = configureStore({
  reducer: { chatReducer },
});
