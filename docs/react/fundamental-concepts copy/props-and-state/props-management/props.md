1. __What are props?__

Think of a React functional component as a function that takes in data as an argument and then returns JSX to create a user interface.

The arguments of a functional component are props or properties. As they define the properties of the component.

A prop is all the information about the component that can be dynamically passed down to child components.

Props are JavaScript objects. The props object provides data to a component to be displayed. 

```console.log (props)``` on any element you will see if it has props or not, it will log an empty object if the component has no props.

With props we can display dynamic data within a component. In the demo section of the fundamental-concepts section the component Greet accepts the props title, name and petAnimal - all strings.

```
<GreetName title="Miss" name="Candy" petAnimal="parrot">
```

If we ```console.log(Object.keys)``` it is going to return an array of keys from that ```object.console.log(Object.keys.props)``` is another log we can add to debug.

It's also common to see values from the props object de-structured for brevity. 

Props can be in the form of methods as well as primitive data types (strings, booleans, numbers). React only renders primitive data-types and arrays. If you try and render an object in react you will get an error ```[Object: Object]```. 

2. __What is the benefit of using props?__

Props is the optional input a component can accept, it makes components dynamic. It keeps code DRY (don't-repeat-yourself) repeating code is inefficient and expensive in run-time.

```<Greet greeting={greeting}>``` is now reusable and dynamic. 

As functional components are pure functions they return the same result with each component, if you did not have props passed into the component it would always render just what is in the JSX tag.

Props are immutable - they do not change and act as pure functions.

3. __What is the props.children method?__

`props.children` and the deconstructured `children` are reserved key words and can not be used to define props. When you want to render more than one prop of a child component or different props in different child components then this method comes handy.

```<Greet>{props.children}</Greet>```

All nested elements in this component refer to children of props.

4. __Props in Class-based components__

A prop that has been set in a stateful component must be passed down as a parameter in the constructor method.

The super calls upon this method and using the `this.props` method accesses the props to be rendered in JSX.

When props are passed to a class component, the key word `this` must be used as it is now pointing to a different object, in this case the prop of the instance of the object `ClassComponentWithProps` that has been created from the React Component Library method.


To understand props better, the indepth JSX documentation is useful [https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized]


As well as the general documentation on props[https://reactjs.org/docs/components-and-props.html]
