import React from "react";

import ClassComponentClickEvents from "../eventComponents/ClassComponentClickEvents";
import ClassComponentMouseOver from "./ClassComponentMouseOver";

export default function FunctionalComponentClickEvents() {
  function handleClick() {
    console.log(`Button clicked`);
  }
  return (
    <div className="card">
      <h4>Click events with Functional Components</h4>
      <button onClick={handleClick}>
        Event handlers are passed functions with logic, this button's function
        on click logs a message to the console.
      </button>
      <p>Click me and check the developer console</p>
      <ClassComponentClickEvents />
      <ClassComponentMouseOver />
    </div>
  );
}
