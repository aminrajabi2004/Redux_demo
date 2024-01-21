import { BUY_MILK } from "./milkTypes";

export default function milkActions(milk = 1) {
  return {
    type: BUY_MILK,
    payload: milk,
  };
}
