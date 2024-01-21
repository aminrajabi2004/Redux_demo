import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numOfCake: 0,
};

export default function cakeReduser(state = initialState, action) {
  switch (action.type) {
    case BUY_CAKE: {
      return {
        ...state,
        numOfCake: state.numOfCake + Number(action.payload),
      };
    }

    default:
      return state;
  }
}
