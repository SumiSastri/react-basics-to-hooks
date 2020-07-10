import React from "react";

import IncrementOnClickWrapper from "../higherOrderComponents/IncrementOnClickWrapper";
import IncrementMouseOverWrapper from "../higherOrderComponents/IncrementMouseOverWrapper";

export default function HigherOrderComponents() {
  return (
    <div>
      <div className="card">
        <h4>HOC's: Higher Order Components - Demo</h4>
        <p>
          HOCs are one way of dealing with the challenge of prop-drilling. A HOC
          is a bit like a higher order function (a function that returns a
          function), a HOC is a React component that returns another React
          component as a call back function.
        </p>
        <IncrementOnClickWrapper />
        <IncrementMouseOverWrapper />
      </div>
    </div>
  );
}
