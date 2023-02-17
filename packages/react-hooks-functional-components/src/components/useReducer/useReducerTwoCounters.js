import React, { useReducer } from "react";

const UseReducerTwoCounters = () => {
  const initialState = {
    addAndSubtractCounter: 0,
    multiplyAndDivideCounter: 100,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "addTen":
        // spread initial state, overwrite with first state and the action
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
      case "resetCounters":
        return initialState;
      default:
        return state;
    }
  };
  // state and the dispath method
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Demo 2 - Two Counters with state as an object</h3>
      <p className='badge'>Counter 1 {count.addAndSubtractCounter} </p>
      <p className='badge'>Counter 2 {count.multiplyAndDivideCounter} </p>
      {/* ADD */}
      <button
        className='btn'
        onClick={() => dispatch({ type: "addTen", value: 10 })}
      >
        +10
      </button>
      {/* SUBTRACT */}
      <button
        className='btn'
        onClick={() => dispatch({ type: "subtractFive", value: 5 })}
      >
        -5
      </button>
      {/* MULTIPLY */}
      <button
        className='btn'
        onClick={() => dispatch({ type: "multiplyByTen", value: 10 })}
      >
        *10
      </button>
      {/* DIVIDE */}
      <button
        className='btn'
        onClick={() => dispatch({ type: "divideByFive", value: 5 })}
      >
        /5
      </button>

      <button
        className='btn-dark'
        onClick={() => dispatch({ type: "resetCounters" })}
      >
        Reset counters
      </button>
    </div>
  );
};

export default UseReducerTwoCounters;
