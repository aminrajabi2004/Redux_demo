import { applyMiddleware, createStore } from "redux";
import cakeReduser from "./cake/cakeReduser";
import rootReduser from "./rootReduser";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
