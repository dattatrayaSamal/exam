import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { postReducer } from "./reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  posts: postReducer,
});
export type RootState = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
