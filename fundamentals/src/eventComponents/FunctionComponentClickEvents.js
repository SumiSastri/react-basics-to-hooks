import React from "react";

import ClassComponentClickEvents from "../eventComponents/ClassComponentClickEvents";
import ClassComponentMouseOver from "./ClassComponentMouseOver";

export default function FunctionalComponentClickEvents() {
  function handleClick() {
    console.log(`Button clicked`);
  }
  return (
    <div>
      <h4>Click events with Functional Components</h4>
      <button onClick={handleClick}>Click me</button>
      <p>Click me and check the developer console</p>
      <ClassComponentClickEvents />
      <ClassComponentMouseOver />
    </div>
  );
}
