import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { darkModeReducer } from "../reducers/darkModeReduce";

const bigReducer = combineReducers({
  darkMode: darkModeReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
