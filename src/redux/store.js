import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { rootReducer } from "./rootReducer";

const logger = createLogger();

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({
    }),
    logger,
  ],
});

export default store;
