import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { songsReducer } from "./reducers/songsReducer";

import { authReducer } from "./reducers/authReducer";

import { jsonReducer } from "./reducers/jsonReducer";

const reducers = combineReducers({
  songs: songsReducer,
  userLogin: authReducer,
  jData: jsonReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = { userLogin: { userInfo: userInfoFromStorage } };

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
