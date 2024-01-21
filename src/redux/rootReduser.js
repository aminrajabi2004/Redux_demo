import { combineReducers } from "redux";
import cakeReduser from "./cake/cakeReduser";
import milkReduser from "./milk/milkReduser";
import userReduser from "./user/userReduser";

const rootReduser = combineReducers({
  cake: cakeReduser,
  milk: milkReduser,
  users: userReduser,
});

export default rootReduser;
