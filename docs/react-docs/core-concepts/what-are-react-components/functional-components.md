# Functional Components

The purpose of this documentation is to outline what a functional component is and when to use it.

**What is a functional component in React**

A functional component is a JavaScript function that describe the state of the user interface.

Funtional Components are essentially JavaScript functions that return JSX. The functions have params which are objects known as properties. Props are objects which are an unordered list of a variety of data forms including methods, as well as primitive data types (strings, booleans, numbers) and complex data types - nested objects and arrays.

They were also known as presentational or dumb components as they do could not access the `state` object or lifecycle hooks available in class-based components.

**Functional component under the hood**

```
const ComponentName = (props) => { return (<JSX>)}
```

The sample JSX needs a parent div-tag

```
<div><h1>I am a functional component </h1></div>
```

With the Hooks API (2019), functional components can access state and therefore are no longer considered 'dumb' components.

There are no breaking changes and are 100% backwards compatible.

Functional components can now use the API and the method `useState` Hook to access `state` and React LifeCycle methods.

Functional components must return a parent `div` JSX that nests any other components or JSX tags.A `React.Fragment` can also be used, which is an empty opening and closing tag `<>` JSX Elements `</>`.

React Fragments are used when you may not want a div tag rendered, as in a Component that deals only with front-end page routing.

**What are the two ways to create a functional component?**

Functional components can be written with either named or unamed exports so that they can be used in other parts of the app.

```
 <!-- NAMED export - ES-6 assigns the function to a variable and a void function-->
const Greet = () => (
	<div>
		<h1>Hello World</h1>
	</div>
	 );
export default Greet;


 <!-- UNAMED export - ES-5 uses the function key word-->
function Greet() {
 	return (
 		<div>
 			<h1>Hello World</h1>
 		</div>
 	);
 }


```

**BEST PRACTICE FOR FUNCTIONAL COMPONENTS**

1. Functional components must return a parent div that nests any other components or jsx tags - this simply returns hello world.

2. Named components explicitly name the export. They are imported are with curly braces `import { Home } from 'filepathName';` and will not be recognised as an import without the curly braces.

```
import React from "react";

const Home = () => (
  <div>
    <h1>
      This is a React tutorial which refactors all class components to Hooks
    </h1>
  </div>
);
export default Home;
```

3. It is recommended to use functional components where possible. Functional components do not have the this key word as it has no reference to state or the underlying data of the components.

Especially with the introduction of Hooks, it is recommended to start by using functional component over a class-based component.

4. In VSCode if you have installed the snippets extention you can use `rfc` to create the boiler plate
