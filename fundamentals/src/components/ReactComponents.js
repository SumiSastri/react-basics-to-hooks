import React from "react";

export default function ReactComponents() {
  return (
    <div>
      <h4>What is a Component?</h4>
      <p>
        Under the hood React Components are JavaScript classes with prototypal
        inheritance. Each Component therefore is a blueprint and creates in a
        module a reusable block of code that can be exported and imported into
        another module. The reusable nature of Components allows complex
        applications to be built in a modular fashion.
      </p>
      <p>
        A page, for example, may have a nav-bar, articles, images, buttons etc.,
        Each of these parts of the user interface can be broken down into a
        Component.
      </p>
      <p>
        Components are nested (a component within another component is a nested
        component) to create a page layout. For example, a nav bar is a
        component with Button-Components, a Logo-Component, Link-Components,
        nested in it.
      </p>
      <h4> What are the advantages of a component-based library?</h4>
      <p>
        Components help developers isolate features and build them
        independently. While one developer works on a nav-bar another can work
        on buttons, the components can be exported and imported to build a page.
        Facebook uses over 50,000 components for its user interface. Building
        smaller components also helps quickly solve and debug problems and test
        functionality of the component in isolation from the rest of the app
        before proceeding to end-to-end testing.
      </p>
      <h4>What is JSX in a component? </h4>
      <em>
        JSX stands for JavaScript XML that is transpiled back into JavaScript in
        the React Library so that browsers can read them. JSX superficially
        ressembles HTML and makes it easy for the developer to create page
        layouts using JavaScript functions and React methods within the JSX
        tags. JSX has tags, tag names, attributes and children. React can be
        written without JSX but it makes the developers' experience much better
        as the syntax is easy and familiar.
      </em>
    </div>
  );
}
