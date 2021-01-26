import { combineReducers } from "redux";
// import { connectRouter } from "connected-react-router";

// import todoList from "./board/actions";
import mainReducer from "./main/reducer";

const rootReducer = combineReducers({
  // todoList,
  mainReducer,
  //   router: connectRouter(history),
});

export default rootReducer;
