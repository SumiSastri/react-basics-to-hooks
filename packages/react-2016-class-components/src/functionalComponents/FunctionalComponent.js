import React from "react";

import HelloWorld from "./HelloWorld";
import { Welcome } from "./Welcome";

export default function FunctionalComponent() {
  return (
    <div className="card">
      <h4>What are functional components?</h4>
      <p>
        A functional component is a JavaScript function that returns JSX. The arguments 
        of this function are properties or props of the JSX. Props are JavaScript objects.
        They are pure functions with no side-effects - which means
        their behaviour is predictable & they will always render the same
        information that is passed into the return or render methods.
      </p>
      <br/>
      <p>
        Functional components were also known as presentational, static or dumb
        components as they could not access state or lifecycle methods available
        in class components. With the introduction of the Hooks API (2018),
        functional components can access state and therefore are no longer
        considered 'dumb' or purely presentational components.
        Angled brackets denote the start and completion of JSX as in HTML. The attributes
        of JSX are also written as in HTML with an equals sign - but with JSX the equal sign
        is a JavaScript assignment operator. You can assign strings, numbers and methods to props.
      </p>
      <br/>
      Refer to the code in the repo: This is the parent of the Hello World component props are passed to the
      child component.
      <HelloWorld documentation="This tutorial uses React.js documentation as a guide" />
      In this second example,  the functional component gets its props which can be dynamically changed in each component.
      The props name, title and petAnimal have different values in the class components demo where what is rendered is
      Ms Priscilla and gorilla - as the key-value pairs in props - which are an object can be changed.
<br/>
        <div className="badge"> Props demo 2: 
      <Welcome 
      title="Professor"
      name="Louella"
      petAnimal="goat"
      />
     </div>
    </div>
  );
}
