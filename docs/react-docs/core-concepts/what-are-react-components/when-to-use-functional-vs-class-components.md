# Component Composition - Class or Functional Components?

The purpose of this documentation is to demonstrate the difference between functional and class components and when should you use one over the other. Read in conjunction with the `functional-components.md` and `class-components.md` docs

It is recommended to use functional components where possible if you are still using React-2016. Upgrading to React-2019 gives you access to the `useState` Hook and only functional components are used with React-2019 apps.

Functional, presentational or dumb components, do not have the `this` key word as it has no reference to `state` or the underlying data of the components via the JavaScript class-based syntax. With React-2019 `state` is accessed via an array and array methods.

Class, Container, Stateful or smart components contain state - or the underlying data that determines how the information on a page changes. Each component manages a private state as in a JavaScript class.

Using the JavaScript class syntax, a class that is named, extends the React Library's Class Component methods to render JSX elements. Data is held in `staticDerivedProps` an immutable object and the `state` object that can be dynamically changed due to prototypal inheritance of classes in JavaScript.

**Functional component under the hood**

```
const ComponentName = (props) => { return (<JSX>)}
```

The sample JSX needs a parent div-tag

```
<div><h1>I am a functional component </h1></div>
```

**Class component under the hood**

```
class MyClassComponentName extends React.Component {
    render(){
        return(JSX)
    }

}
ReactDOM.render(React.createElement(MyClassComponentName), mountNode)
```

The sample JSX needs a parent div-tag

```
<div><h1>I am a class component </h1></div>
```

Note that the only mandatory method that this component must use is the render method, there is no need for state or a constructor.

Class-based Components are feature rich as they use ES-6 classes to extend the methods in the React Component Library. Classes which are JavaScript functions, in the case of a React Class Component must return the UI in the `render()` method.

The Component library has several life-cycle methods that help with the rendering of the data to the Virtual DOM as well as the root HTML node and the real DOM.

These components hold complex logic and the React Library's inbuilt methods - or the lifecycle of the component from when it mounts to when it unmounts.

Class components can also receive props to update the user interface. These props are passed as params of the constructor in the component `constructor(props)`.

Class components must have a render method to display the information held in the state - or underlying data of the page. The ES-6 class constructor holds the state in the form on a JavaScript object - referred to as the component's state.

Class components are often used in forms where state or data is received from the user as an input and has to upate the initial state (an empty form field) and this data is then captured and sent via an API-call to a back end data-base.

Once again with the introduction of Hooks, functional components can be use with the `useEffect()` method invoked.

Class functions are traditionally used as it offers dynamic updating of state with the `setState()` method. However with props, they are immutable and can not change.
