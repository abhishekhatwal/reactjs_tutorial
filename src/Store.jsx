import { createStore } from "redux";
import rootreducer from "./reducers/main_reducer";

const store=createStore(rootreducer);

export default store;