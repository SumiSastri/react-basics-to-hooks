import React from "react";

import HelloWorld from "./HelloWorld";

export default function FunctionalComponent() {
  return (
    <div className="card">
      <h4>What are functional components?</h4>
      <p>
        A functional component is a JavaScript function that renders JSX
        elements and/ or props. They are modular and reusable, making code
        extensible. They are pure functions with no side-effects - which means
        their behaviour is predictable & they will always render the same
        information that is passed into the return or render methods.
      </p>
      <p>
        Functional components were also known as presentational, static or dumb
        components as they could not access state or lifecycle methods available
        in class components. With the introduction of the Hooks API (2018),
        functional components can access state and therefore are no longer
        considered 'dumb' or purely presentational components.
      </p>
      <HelloWorld documentation="This tutorial uses React.js documentation as a guide" />
    </div>
  );
}
