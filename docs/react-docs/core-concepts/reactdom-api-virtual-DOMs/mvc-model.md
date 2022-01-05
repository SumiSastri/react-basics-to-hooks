# The Model View Control (MVC) pattern - an introduction

The purpose of this documentation is to outline how the MVC,Model-View-Control pattern, is applied with React.

**What is the Model View Control?**

MVC or the Model View Control is a pattern that separates what you see, the user interface (UI) and the data (state) and how the component `state` interacts with the UI and what controllers it uses (programming patterns)

- the View (HTML with CSS mark-up) what you see (UI)

- the Model is the data (the state object)

- the Controller controls the interactions with the model (the state object) - eg: the methods `documentQuerySelector` in JavaScript, or `React.createElement()` with the React Library which uses JavaScript as its base programming language

In React each component is independent, it stands on its own and requires Component Composition planning - ie each component needs to be composed with other components to build complex user-interfaces.

With React, JSX Elements, mark-up(CSS) and JavaScript logic are co-located in the same file. Unlike the separation of concerns where JavaScript, CSS and HTML Elements are in different files.

However HTML-CSS-JavaScript are closely intertwined and to separate them may not be the best option. React recognises the inderdependent nature of these three concerns and encapsulates them in a component replacing HTML with JSX elements.

Take the example of a page which has a heading that is similar in style across other pages, text with a picture - the placement of the text and picture differs across several pages, the page may have a button that is similar in style but not in functionality across pages. The page (container) the button the text (`h` tag or `p` tags) can each be a component with separate concerns.

So creating small reusable components - like the heading means it can be used again and again without the same code being repeated across the site - code once use many times.

The separation of concerns therefore should be at component level not at the language level. Using JSX elements and passing it into one HTML element that renders the whole app, is the way React controls the UI (what we see) with the data (state) and the programming effort (JavaScript)

```
function Hello() {
	return <div>Hello React!</div>;
}

ReactDOM.render(
  <Hello />,
  document.getElementById('mountNode'),
);
```

In this functional component the component has one function - to return the JSX `div` element.

**What does the ReactDOM-API do vs. the DOM-API?**

The ReactDOM-API's render method is called. The first argument of the method is to return `React.createElement()` in this case the `<Hello/>` functional component, the second argument is to render the JSX on the DOM-API by calling the DOM-API method `document.getElementById()`. The `div` which is a node in the DOM tree is then mounted.

This is considered by the React library as the entry point to the real DOM (document-object-model), separating the view from the controller. The DOM is an API that captures the state tree - that is every node of the UI rendered. See virtual

Once the DOM-API is mounted, the display takes place (UI) as the React component is rendered. If there is no change to the data (state) of the React component no changes are recorded (unlike HTML which contains state so every change is displayed live).

With the React-library, there are inbuilt listeners (DOM tree-reconciliation algorithm in memory for the ReactDOM-API) that pick up any changes to the underlying `state` of the component - occuring externally as with forms when users type in data - this new data or `state` is then updated when the component mounts and stored in the browser and then sent to the back-end databases. This helps prevent expensive layout thrashing (see the `virtual-DOM.md`) where changes to every node is recorded which is expensive in run-time.

If the change is internal (due to changes in the programming of the components) React library has methods that react to these changes and the React Component life-cycle methods are triggered.

**Gotchas**

- Because React is not concerned with the data (state) loading, storing and only with the display. State becomes crammed into class-based components and often passed in a tangled mess of `props` into an application.

- MVC does not allow for much thought into the data-flow and architecture which can result in unmanageable Gordian-knots of code (spaghetti). The data-flow and architecture is up to the developer writing the code and creating the components. With less experienced teams who do not use a design-architecture this can get messy.
