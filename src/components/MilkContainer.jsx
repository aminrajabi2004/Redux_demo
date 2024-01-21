import React from "react";
import { useDispatch, useSelector } from "react-redux";
import milkActions from "../redux/milk/milkActions";

function MilkContainer() {
  const milk = useSelector((state) => state.milk);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>milk counter : {milk.numOfMilk}</h2>
      <button onClick={() => dispatch(milkActions())}>Buy Milk</button>
    </div>
  );
}

export default MilkContainer;
