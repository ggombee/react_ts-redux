// // import { createStore } from "redux";
// import rootReducer from "./rootReducer";
// import { configureStore } from "@reduxjs/toolkit";

// // const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// // createStore 활용 API, reducer 필수 , default redux devtool 제공
// const store = configureStore({
//   reducer: rootReducer,
//   // middleware:[thunk, logger],
//   //   devTools: process.env.NODE_ENV !== "production",
//   // enhancers: [reduxBatch]
// });

// export default store;

import { createStore } from "redux";

import rootReducer from "./rootReducer";

const configureStore = () => createStore(rootReducer);

export default configureStore;
