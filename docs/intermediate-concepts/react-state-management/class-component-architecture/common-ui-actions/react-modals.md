The purpose of this documentation is to provide a basic understanding of the React.js open source library and answer frequent interview questions. It is a quick high-level view of React. Several sub-sections may go into the detail - this is purely to boil down the key concepts for interviews.

Follows the React documentation [https://reactjs.org/docs/getting-started.html] 

__Why React?__

Look at the separate section that covers the benefits of using React vs other libraries or frameworks

1. __What is React__

React is a front-end JavaScript library created by Facebook for user interfaces. It is maintained by Facebook and an open source developer community.

It is used because it helps in scaling apps quickly and efficiently. React focuses on the developer experience. 

The key advantage of React is that it makes it easier for front-end developers to build rich user-interfaces without having to think about DOM manipulation, CSS-selectors, rendering and updating multiple pages as an application grows. 

As the underlying data that drives the pages change, the user interface is updated and changed automatically. 

This is done seamlessly under the hood with key React methods that have been written into the library.

React is 'just JavaScript' - there is a very small React API from the React Library import. It is basically JavaScript - a functional component, with an object as its argument known as props, that returns JSX. Class components return state and props in the rendered JSX. 

With Ember, Angular and Vue you need to learn the syntax of the framework, with React you need only to know JavaScript syntax. Another reason why React is considered 'just JavaScript'.

React - uses the conditional operator in JavaScript, so JavaScript error messages appear in the console

```
{isUser && <p>Hi User<p>}
```
Vue the Vue syntax ```v=if``` is used - similar for other languages each has its own syntax, it needs its own debugging tools.

```
<h1 v-if="isUser>Hi User</h1>
```

Similarly if you want to use the map function you can with React, to map the user names.

React - the only React syntax is the curly braces around between the ```div``` JSX tags simply because it is JSX not HTML.

```
users.map(user => <div> {user.name}</div>)
```

If you look at Angular the syntax ```*ngFor``` has to be used as the syntax, there is no similarity with the JavaScript map function.

```
<div *ngFor="let user of users">{{user.name}}</div>
```

Therefore you need to learn the syntax of the framework, with React, you only need to know the JavaScript syntax and apply it.

2. __What is the difference between a library and a framework__

The key difference between a library and a framework is the amount of control a developer has over features and functionality. 

With a framework all features, functionality and architecture are pre-determined with limited options to change the control-flow or logic of the framework. For example with Angualr you get the components, testing, a http library, routing, internationalization, animation, form validation and CLI tools all baked in. 

It is a skeleton within which you can work.

This makes it hard to deviate, hard to customize and hard to use it in small modular parts. You either use the whole framework or nothing. Some frameworks are going modular, but they are still not as easy to use as libraries.

However, there are advantages using frameworks. Opinions are clear, there is less set-up overhead, less decision fatigue and more cross-team consistency.

The use of templates rather than core JavaScript also makes frameworks easy to use. You learn the template language rather than JavaScript, there is no confusion over JavaScript binding with the ```this``` key word. The rule of least power - less powerful languages allows the user only to use a small range of use cases. However you need to learn template specific rules. 

It becomes more difficult as a result to move to other JavaScript libraries or frameworks with a template-framework approach as you have to learn the syntax from scratch as the resemblance to JavaScript is low.

A library is a loose collection of tools that you can pick and mix and offers more control for the developer. The main tool you get with React is the components. You have to then configure the testing, routing, form validation etc., of your choice so it is more like a lego set to be assembled rather than a skeleton to flesh out.

The technical term for this limitation of control is called the inversion of control - with a library the flow can be controlled by the developer with a framework the framework controls the developers work flow and coding options. 

With React being JavaScript centric as a library it has no template-framework specific syntax and fewer concepts to learn as it is JavaScript. There is less code and it is easier to read if you already know JavaScript.

This makes skills transfer easier - to Node and other JavaScript-based libraries.

More from Freecodecamp [https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/]


3. __What is imperative and declarative code? Which does React use? What are the advantages?__


Imperative code prescribes an exact sequence of steps in the alogrithm for the code to run. 

Declarative code is when the outcome is described and the code takes care of the execution. 

React uses declarative code to build UI by the description of the actions required for the user-interface to be rendered. 

React describes how the web user-interface should be rendered. The render method is separate from the function that describes how the component should look. The description of the ui is held in the data - props or state - that is then rendered on a browser.

HTML is a declarative language as well. React returns JSX that looks like HTML. 

The advantage is that React is declarative for dynamic data. HTML is declarative for static content.

Under the hood, React complies and transpiles the changes you need for the JSX into JavaScript that browsers can read. The UI is therefore in JavaScript not HTML. 

The React library and handles updating and rendering the components to the Virtual DOM first before it is rendered on the DOM. 

Therefore if you have an app that needs to display an updated price of a product when a user selects a product and proceeds to check out, React will only update the product selected, the addition to the cart and the new price for the additional item purchased. No changes are made to the other products in the inventory in the user interface or in the shopping cart.

4. __What are the advantages of a component-based library?__

Components help developers isolate features and build them independently. This is known as responsibility isolation. It is one of the key design decisions developers need to make - how to isolate and make components reusable.

While one developer works on a nav-bar another can work on buttons, the components can be exported and imported to build a page. 

Facebook uses over 50,000 components for its user interface. Building smaller components also helps quickly solve and debug problems and test functionality of the component in isolation from the rest of the app before proceeding to end-to-end testing.

Components help developers isolate features and build them
independently. Smaller components also helps quickly solve and debug
problems and test functionality of the component in isolation from the rest of the app before proceeding to end-to-end testing.

5. __Standard templates and components__

- The Web Components Standard -  a standard components library with HTML, but these are not used compared to frameworks and libraries.

- This is because they are not updated as frequently, are not as compatible with various browsers and new features are rarely introduced.

6. __What is JSX is the React Component Library?__

As there is no separation of concerns at the file level, the component renders HTML, mark-up and DOM manipulation.

However there is responsibility isolation - each component is responsibile for what it does. This is how React deals with separation of concerns.

HTML is created via JSX.

JSX stands for JavaScript XML that is transpiled back into JavaScript in the React Library so that browsers can read them. 

JSX superficially ressembles HTML and makes it easy for the developer to create page layouts using JavaScript functions and React methods within the JSX tags. 

JSX has tags, tag names, attributes and children. 

React can be written without JSX but it makes the developers' experience much better as the syntax is easy and familiar.

* More detailed explaination in what-is-jsx folder.

7. __What is a React Fragment tag?__

A React Fragment is a higher order component that allows you to wrap adjacent JSX elements. It is like a ghost element as it is not rendered as a JSX element on the DOM.

It removes the adjacent JSX need to be wrapped in a parent div error.

For an example see the intermediate level props-and-state-demo section.

There are 4 ways to render adjacent JSX tags
1) In an array of tags
2) Between div tags
3) Between the HOC React.Fragment tag
4) Or between the Empty Fragment tag

- Documentation for JSX[https://reactjs.org/docs/introducing-jsx.html] 

- Detailed documentation for JSX[https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized]

8. __How does React gets its name?__

React only reacts changes in the specific component that needs updating. 

This is because of the model-view-controller separation of concerns. (See mvc-virtual-dom section).

9. __What is the meanining of uni-directional data flow in React?__

This is one of the most important concepts in React. 

It significantly impacts how you can pass data from one component to another. While conceptually it is easy to understand, getting to grips with the way data flows determines how you debug code in a commercial app as well as how to plan the set-up of your ui-ux as you build your own side-projects.

Data can only flow from a parent component to a child component. This top-down data-flow allows data to be passed down as properties of the original component to the nested child components. A child component can not pass data up to the parent component - except in the case of stateful components. 

This is also known as one-way binding. Which is explicit, allows more control and is easier to debug.

The ability of a stateful child to pass props to a stateful parent is used extensively in forms.

Two-way binding allows data-flows between parent and child, there is less coding and automatic.

One way-binding provides reliability, clarity and better performance.

10. __What is the difference between functional and class components and when should you use one over the other?__

A functional component is a JavaScript function that describe the state of the user interface. They were also known as presentational or dumb components as until React 16 they did not have access state. They were therefore pure functions with no side effects.

Class, Container, Stateful or smart components contain state - or the underlying data that determines how the information on a page changes. Class Components are feature rich as they use ES-6 classes to extend the methods in the React Component library. The Component library has several life-cycle methods that help with the rendering of the data to the Virtual DOM as well as the root HTML node and the real DOM. These components hold complex logic and the react library's inbuilt methods. Class components can also receive props to update the user interface.

With the introduction of React 2108 (Hooks) it is recommended only to use Functional Components.

Class Components can be used when complex logic is required and when state needs to be updated through the life-cycle of a component from mounting to unmounting. Before the introduction of Hooks, Class Components were used when data on a component ui needed frequent changing - like in forms where user inputs are captured and updated.

More details in the fundamental concepts what-are-react-components folders

11. __What is a prop in React and what are the benefits using props?__

Properites of a component are also known by the shortened version, props. The props object is all the information about the component that can be dynamically passed down to child components. 

Props can be passed to both functional and class components. When props are passed to a class component, the key word ```this``` must be used.

Props is the optional input a component can accept, it makes components dynamic. It keeps code DRY (don't-repeat-yourself) repeating code is inefficient and expensive in run-time. 

More details in the props-management folder.

12. __What is state and state management in React?__

State is the underlying data of a user interface, everytime this data changes the component is updated and re-rendered. 

State a readable and writable object with the method ```setState``` used to update component ui's data. Class components use the ```render()``` method to display these changes. Traditionally (React 2016) React functional components rendered ```props``` and ```props.children``` as they were functions that returned JSX as a call back of the ```React.createElement()``` method.

Since React 2019, state is updated with the ```useState()``` hook. (See how Hooks are different from React v. 2016 in the Hooks folder).

With React 2016, state is managed with life-cycle methods written into the React Component Library. (See state-management folder for details)
 
The ```setState``` method triggers the re-render of the page with the new information in the object that has been updated.

State management is also possible with external libraries like Redux and Mobx.

See folder react-state-and-state-management for more details.

13. __What is the difference between props and state?__

Both props and state hold information that make components more dynamic with some differences in the way they are accessed and passed from one component to the other.

State is the underlying data in a component and is managed within the component. 

It is updated and rendered using methods that are native to the React Component library. State can be changed with the ```setState``` method. State is an object and the data can be accessed by ```this.state``` as it references the state in the class and the key word ```this``` points specifically to the state in the class component.

Props are additional properties of a component and get passed from a parent component to a child component. 

Props are immutable, parent owns the props and can not be changed by the children. 

They are function parameters and are accessed with ```props.propName``` while in a class component props need to use the ```this``` key word to reference the object the prop is pointing to, it is therefore accessed with ```this.props.propName```. 

State can be accessed with the Hooks API with the ```useState Hook``` reference files [src/components/stateful/message.js] and [src/components/functional/HelloName.js] compare them with each other and the [src/App.js] file to see how the two ways of passing props from parent component to the child component differ.

14. __What is destructuring?__

Destructuring is unpacking the components properties into single elements so that they can be passed down in a shorted version to the child components. 

It is a JavaScript concept used for both objects and arrays. In React you can destructure props and state as they are both objects.

With React 2019, arrays are destructured to hold state information.