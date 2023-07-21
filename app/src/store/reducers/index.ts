import { combineReducers } from "redux";
import authReducer from "./auth";
import postsReducer from "./post";

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
});

export default rootReducer;
