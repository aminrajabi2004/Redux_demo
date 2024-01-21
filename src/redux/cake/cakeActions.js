import { BUY_CAKE } from "./cakeTypes";

export default function cakeActions(cake = 1) {
  return {
    type: BUY_CAKE,
    payload: cake,
  };
}
