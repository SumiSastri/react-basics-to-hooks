import React from "react";

export default function ReactComponents() {
  return (
    <div className="card">
      <h4>What is a component in the React Library?</h4>
      <p>
        React components are JavaScript classes with prototypal inheritance.
        Each component, therefore, is a modular blueprint that creates a
        reusable block of code that can be exported and imported into another
        module. A page component, for example, may have nested nav-bar,
        articles, images & buttons components.
      </p>
      <h4> What are the advantages of a component-based library?</h4>
      <p>
        Components help developers isolate features and build them
        independently. Smaller components also helps quickly solve and debug
        problems and test functionality of the component in isolation from the
        rest of the app before proceeding to end-to-end testing.
      </p>
      <h4>What is JSX? </h4>
      JSX is JavaScript XML that is transpiled back into JavaScript in the React
      Library so that browsers can read them. React can be written without JSX,
      as JSX expressions are JavaScript functions and methods under the hood.
      However, JSX's superficial ressemblance to HTML - JSX elments have tags,
      tag names, attributes and children - make the developer experience writing
      code better.
    </div>
  );
}
