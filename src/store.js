import RootReducer from "./reducer/RootReducer";

import { createStore } from "redux";


const store = createStore(RootReducer);

export default store;