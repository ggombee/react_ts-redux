import { createStore } from "redux";
import rootReducer from "./rootReducer";

const configureStore = (): any => createStore(rootReducer);

export default configureStore;
