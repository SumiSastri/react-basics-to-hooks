import React, { useReducer } from "react";

const UseReducerCounter = () => {
  const initialState = 0;
  // define the reducer switch cases
  const reducer = (state, action) => {
    // return newState;
    switch (action) {
      case "addOne":
        return state + 1;
      case "minusOne":
        return state - 1;
      case "resetToZero":
        return initialState;
      default:
        return state;
    }
  };
  // state and the dispath method
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Demo 1 - Counter with JS primitives - numbers</h3>
      <p className='badge'>Current Count: {count} </p>
      {/* dispatch the action */}
      <button className='btn' onClick={() => dispatch("addOne")}>
        +1
      </button>
      <button className='btn' onClick={() => dispatch("minusOne")}>
        -1
      </button>
      <button className='btn-dark' onClick={() => dispatch("resetToZero")}>
        Reset
      </button>
    </div>
  );
};

export default UseReducerCounter;
