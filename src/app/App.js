import React from "react";
import { BrowserRouter } from "react-router-dom";
// import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

import { BasePages } from "./BasePages";
// import AuthPage from "./pages/AuthPage";
// import store from "../stores/configureStore";

// 여러개의 미들웨어를 적용 할 수 있음.
// const store = createStore(
//   // rootReducer,
//   composeWithDevTools(applyMiddleware(logger))
// );

function App({ store }) {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <BasePages />
          {/* <AuthPage /> */}
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
