import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cakeActions from "../redux/cake/cakeActions";

function CakeContainer() {
  const [value, setValue] = useState(0);

  const state = useSelector((state) => state.cake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2> Cake Counter : {state.numOfCake} </h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(cakeActions(value))}>Buy Cake</button>
    </div>
  );
}

export default CakeContainer;
