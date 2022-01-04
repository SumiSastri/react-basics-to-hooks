# Component properties or props

The purpose of this document is to give you a quick overview of a React Components properties or `props`. Props documentation: [https://reactjs.org/docs/components-and-props.html]

**What is a React Component prop?**

A React functional component is a JavaScript function that takes in data as an argument and then returns JSX elements to create a user interface (UI).

The arguments of a functional component is the properties object or `props`, as they define the properties of the component, they are referred to `props` just as `e` refers to `event` when it is used as an argument in a JavaScript function.

A `prop`, therefore, is all the information about the component that can be dynamically rendered and passed down to child components. The `props` object provides data to a component to be displayed. Log to the console`console.log (props)` any element you will see if it has props or not, it will log an empty object if the component has no props. You will see `props` is an object when you see the console.

With `props` we can display dynamic data within a component (see demo-section)

```
<GreetName title="Miss" name="Candy" petAnimal="parrot">
```

If we `console.log(Object.keys)` it is going to return an array of keys from that `object.console.log(Object.keys.props)` is another log we can add to debug.

It's also common to see values from the props object de-structured for brevity.

Props can be in the form of methods as well as primitive data types (strings, booleans, numbers). React only renders primitive data-types and arrays. If you try and render an object in react you will get an error `[Object: Object]`.

**What is the benefit of using props?**

Props are the optional input a component can accept, other than plain JSX elements. It makes components dynamic as it renders the data in the `props` object. It keeps code DRY (don't-repeat-yourself) repeating code is inefficient and expensive in run-time.

`<Greet greeting={greeting}>` is now reusable and dynamic.

As functional components are pure functions they return the same result with each component, if you did not have props passed into the component it would always render just what is in the JSX tag.

Props are immutable - they do not change and act as pure functions. They, therefore add reliablity and code stability to the rendering of UI.

**What is the props.children method?**

`props.children` and the deconstructured `children` are reserved key words and can not be used to define the `props` object. Unamed `props` that are held within a component are the `children` properties of the Component.

`<Greet>{props.children}</Greet>`

All nested elements in this component refer to children of props. See intermediate-concepts and props-managment for more detailed documentation on `props.children`

**Props in class-based components**

A `prop` object that has been set in a class-based component must be passed down as a parameter in the `constructor()` method.

The `super()` calls upon this method and using the `this.props` method accesses the props to be rendered in JSX.

When props are passed to a class-component, the key word `this` must be used as it is now pointing to the `prop` object that is held in the component of origin.
