import React from "react";
import ReactDOM from "react-dom";
// import { Routes } from "./app/Routes";
import App from "./app/App";
// import axios from "axios";

import reportWebVitals from "./reportWebVitals";
import configureStore from "./stores/configureStore";

// export const localAxios = axios.create({
//   baseURL: "https://api.lullu.app",
// });

// _redux.setupAxios(axios, store);
// import store, {persistor} from "./redux/store";
// import store from "./stores/configureStore";
const store = configureStore();

// Provider 는 자식 컴포넌트 App 이 store 의 state 를 사용할 수 있도록 해준다.
ReactDOM.render(<App store={store} />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
