import React from "react";
import "../../App.css";

import UseReducerCounter from "./useReducerCounter";
import UseReducerTwoCounters from "./useReducerTwoCounters";
import UseReducerCounterTwoReducers from "./useReducerCounterTwoReducers";

const UseReducerHome = () => {
  return (
    <div>
      <div className='card'>
        <h2>The useReducer Hook</h2>
        <UseReducerCounter />
        <UseReducerTwoCounters />
        <UseReducerCounterTwoReducers />
      </div>
    </div>
  );
};

export default UseReducerHome;
