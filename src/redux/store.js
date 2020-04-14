import { createStore, applyMiddleware } from "redux";
import dataReducer from "./data/dataReducer";
import thunk from "redux-thunk";
const store = createStore(dataReducer, applyMiddleware(thunk));

export default store;
