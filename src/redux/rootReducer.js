import { combineReducers } from "redux";

const appReducer = combineReducers({});

const rootReducer = (state, action) => {
  if (action.type === "login/logout") {
    state = undefined;
  }
  return appReducer(state, action);
};

const initialState = {};

export { rootReducer, initialState };
