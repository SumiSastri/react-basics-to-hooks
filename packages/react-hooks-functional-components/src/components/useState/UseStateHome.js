import React from "react";

import "../../App.css";
// import ClassCounter from "./ClassCounter";
// import ClassPreviousStateCounter from "./ClassPreviousStateCounter";
import HooksCounter from "./HooksCounter";
import HooksPreviousStateCounter from "./HooksPreviousStateCounter";
import HooksWithArrays from "./HooksWithArrays";
import HooksWithBooleans from "./HooksWithBooleans";
import HooksWithObjects from "./HooksWithObjects";

const UseStateHome = () => {
  return (
    <div>
      <h2>The useState Hook</h2>
      {/* <ClassCounter /> */}
      {/* <ClassPreviousStateCounter /> */}
      <HooksCounter />
      <HooksPreviousStateCounter />
      <HooksWithBooleans />
      <HooksWithArrays />
      <HooksWithObjects />
    </div>
  );
};

export default UseStateHome;
