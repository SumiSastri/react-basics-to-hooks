The purpose of this documentation is to outline what a functional component is and when to use it.

__What is a functional component in React__

A functional component is a JavaScript function that describe the state of the user interface. 

They were also known as presentational or dumb components as they do could not access state or lifecycle hooks available in stateful components.

With the Hooks API (2019), functional components can access state and therefore are no longer considered 'dumb' components. 

There are no breaking changes and are 100% backwards compatible. 

Functional components can now use the API and the method useState Hook to access state and React LifeCycle methods.

__What are the two ways to create a functional component?__

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

__BEST PRACTICE FOR FUNCTIONAL COMPONENTS__ 

1. Functional components must return a parent div that nests any other components or jsx tags - this simply returns hello world.

2.  Named components explicitly name the export. They are imported are with curly braces ```import { Home } from 'filepathName';``` and will not be recognised as an import without the curly braces.

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

4. In VSCode if you have installed the snippets extention you can use ```rfc``` to create the boiler plate
