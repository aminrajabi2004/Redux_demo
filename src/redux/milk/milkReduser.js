import { BUY_MILK } from "./milkTypes";

const initialState = {
  numOfMilk: 0,
};

export default function milkReduser(state = initialState, action) {
  switch (action.type) {
    case BUY_MILK: {
      return {
        ...state,
        numOfMilk: state.numOfMilk + Number(action.payload),
      };
    }

    default:
      return state;
  }
}
