### React-fundamentals-to-Hooks

This section covers the basic concepts in React. Prior knowledge of HTML, CSS and JavaScript is required. The readme follows the React documentation [https://reactjs.org/docs/getting-started.html] which is easy to follow.

I have also looked at some React tutorials for specific topics that were not easy to understand. These have been indicated in the appropriate sections and the Appendices section

### Fundamental concepts from the Main Concepts Documentation in React

## What is React?

React is a front-end JavaScript library created by Facebook for user interfaces. It is maintained by Facebook and an open source developer community.

It is used because it helps in scaling apps quickly and efficiently. React focuses on the developer experience. The key advantage of React is that it makes it easier for front-end developers to build rich user-interfaces without having to think about DOM manipulation, CSS-selectors, rendering and updating multiple pages as an application grows. As the underlying data that drives the pages change, the user interface is updated and changed automatically. This is done seamlessly under the hood with key React methods that have been written into the library.

## What is the difference between a library and a framework

The key difference between a library and a framework is the amount of control a developer has over features and functionality. With a framework all features, functionality and architecture are pre-determined with limited options to change the control-flow or logic of the framework. It is a skeleton within which you can work. A library is a loose collection of tools that you can pick and mix and offers more control for the developer. The technical term for this limitation of control is called the inversion of control - with a library the flow can be controlled by the developer with a framework the framework controls the developers work flow and coding options. More from Freecodecamp

- [https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/]

## How do you install React in a project?

- Pre-requisites are node and a text editor
- Run `npx create-react-app yourAppName`
- node modules (all dependencies for the react app) - this is generated on npm install or the create-react-app CLI commands/ webpack and babel are preloaded with this command
- public (holds the root HTML file that renders the index.js - react controls the ui) -manifest json(progessive-web-apps)
- gitigonore (ignores files that need not be pushed to version control)
- package-lock.json (insures consistent installion of dependencies)
- package-json - scripts object run the app
- readme
- react-dom is for web based apps, react-native is for mobile apps
- Main folder for front-end developers is the source folder - src
- index.js (sends the app.js files to the HTML root DOM node) this is why it is called a Single Page App (SPA) as all files routed through a single route file and the `ReactDOM.render()`method which takes two arguements, the component page to be rendered and the where you want to render it - the particular node of the HTML file which is the `root` file.

```
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

- You can create React elements by removing App.js and manually creating each element and its children, this block of code demos

```
<!-- Syntax

ReactDOM.render(React.createElement(tagName, elementProperties, children),
  document.getElementById('root')
); -->

ReactDOM.render(React.createElement("div", {style: {backgroundColor:red}}, React.createElement("h1", {style: {color:blue}}, "Hello World")),
  document.getElementById('root')
);
```

Note that the first arg is a string, the second which is props is an object and the the third is a nested element - a call back function.

- App.js (the file responsible for the single page app's view in the browser)
- App.css (styling)
- index.css (body-styling)
- serviceWorker (progressive web apps)
- App.test.js (sample unit tests that can be run)

## What is imperative and declarative code? Which does React use? What are the advantages?

- Imperative code prescribes an exact sequence of steps in the alogrithm for the code to run.
- Declarative code is when the outcome is described and the code takes care of the execution.

React uses declarative code to build UI by the description of the actions required for the user-interface to be rendered. The advantage is that React under the hood complies and transpiles the changes you need for the UI and handles updating and rendering the components to the Virtual DOM first before it is rendered on the DOM. Therefore if you have an app that needs to display an updated price of a product when a user selects a product and proceeds to check out, React will only update the product selected, the addition to the cart and the new price for the additional item purchased. No changes are made to the other products in the inventory in the user interface or in the shopping cart.

## What is the Virtual DOM and why is it important?

The document object model or DOM is a visual representation of the state tree - or the underlying data of the app. The DOM is made up of nodes and each node holds some element of state in the node. In vanilla JavaScript, and libraries like J-Query, the developer needs to work on accessing each node via CSS-selectors. This is inefficient in run-time, costly and time-consuming. The Virtual DOM is a virtual copy of the DOM and is updated in the background via the inbuilt methods in the React library. This copy is stored in memory and everytime state needs to be changed, state is updated in the virtual DOM first before changes are made to the real DOM.

## What is the meanining of uni-directional data flow in React?

Data can only flow from a parent component to a child component. This top-down data-flow allows data to be passed down as properties of the original component to the nested child components. A child component can not pass data up to the parent component.

15. What are the four React design patterns for conditional rendering?

- using element variables - with imported components
- using conditional statements - if/ if-else/ switch statements
- using the ternery operator - shorter way of expressing if-else
- using the double amperestand - return something or nothing
  Documentation: [https://reactjs.org/docs/conditional-rendering.html]

**Tutorials that are useful to follow**
You Tube videos on React by Code Evolution - Vishwas

- [https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=1]
- [https://api.github.com/users]
  LevelUpTuts - Scott
- [https://www.youtube.com/watch?v=0qqzUXdGGX4&list=PLLnpHn493BHGTMs2UmaPUG6Lu3dHrqryY]
