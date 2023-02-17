import React, { useReducer } from "react";

const UseReducerCounterTwoReducers = () => {
  const initialState = {
    addAndSubtractCounter: 0,
    multiplyAndDivideCounter: 100,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "addTen":
        return {
          ...state,
          addAndSubtractCounter: state.addAndSubtractCounter + action.value,
        };
      case "subtractFive":
        return {
          ...state,
          addAndSubtractCounter: state.addAndSubtractCounter - action.value,
        };
      // second counter
      case "multiplyByTen":
        return {
          ...state,
          multiplyAndDivideCounter:
            state.multiplyAndDivideCounter * action.value,
        };
      case "divideByFive":
        return {
          ...state,
          multiplyAndDivideCounter:
            state.multiplyAndDivideCounter / action.value,
        };
      // resets and default
      case "reset":
        return initialState;
      default:
        return state;
    }
  };
  // state and the dispath method
  const [addAndSubtract, dispatchAddAndSubtract] = useReducer(
    reducer,
    initialState
  );
  const [multiplyAndDivide, dispatchMultiplyAndDivide] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <h3>Demo 3 - Two Counters with two reducers</h3>
      <p className='badge'>Counter 1 {addAndSubtract.addAndSubtractCounter} </p>
      {/* ADD */}
      <button
        className='btn-pink'
        onClick={() => dispatchAddAndSubtract({ type: "addTen", value: 10 })}
      >
        +10
      </button>
      {/* SUBTRACT */}
      <button
        className='btn-pink'
        onClick={() =>
          dispatchAddAndSubtract({ type: "subtractFive", value: 1 })
        }
      >
        -5
      </button>
      <button
        className='btn-dark'
        onClick={() => dispatchAddAndSubtract({ type: "reset" })}
      >
        Reset counter1
      </button>
      <p className='badge'>
        Counter 2 {multiplyAndDivide.multiplyAndDivideCounter}{" "}
      </p>
      {/* MULTIPLY */}
      <button
        className='btn-blue'
        onClick={() =>
          dispatchMultiplyAndDivide({ type: "multiplyByTen", value: 10 })
        }
      >
        *10
      </button>
      {/* DIVIDE */}
      <button
        className='btn-blue'
        onClick={() =>
          dispatchMultiplyAndDivide({ type: "divideByFive", value: 5 })
        }
      >
        /5
      </button>

      <button
        className='btn-dark'
        onClick={() => dispatchMultiplyAndDivide({ type: "reset" })}
      >
        Reset counter2
      </button>
    </div>
  );
};

export default UseReducerCounterTwoReducers;
