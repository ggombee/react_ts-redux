import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "src/utils/history";
import main from "src/stores/main/reducer";
import search from "src/stores/search/reducer";
const rootReducer = combineReducers({
  main,
  search,
  router: connectRouter(history),
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
