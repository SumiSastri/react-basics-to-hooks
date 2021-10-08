__1. What is a React component?__

- Documentation[https://reactjs.org/docs/components-and-props.html]

Components are the building blocks of the React library. 

Components are small reusable blocks of code that help developers construct a complex user-interface.

Components are essentially JavaScript functions that return JSX.
The functions have params which are objects known as properties.

Like functions, components are reusable, flexible and are declared once and invoked many times. Smaller functions can be used as params in bigger functions. React components are the same.

The input of a component are props or state and the output is the rendered HTML with CSS mark-up ui.

It's reusable nature allows applications to be built in a modular fashion - a page for example may have a nav-bar, articles, images, buttons etc., each of these parts of the user interface can be broken down into a component. 

Components are nested one within the other to create a page layout. In other words components within another component is a nested component that helps build a page layout. 

A nav bar is a component with button components, a logo component nested in it.

Components unlike functions are used not invoked. ```<Component/>```

There are two types of components - functional and stateful.

Stateful or class components hold a private state - or data - that makes the ui - the HTML rendered more dynamic. 

React components are JavaScript classes with prototypal inheritance.Each component, therefore, is a modular blueprint that creates a reusable block of code that can be exported and imported into another module. 

(See the demo section for a description and demo of both)


2. __What is the difference between functional and class components and when should you use one over the other?__

A functional component is a JavaScript function that describes the state of the user interface. 

They were also known as presentational or dumb components as they do could not access state or lifecycle hooks available in stateful components. 

Funtional Components are essentially JavaScript functions that return JSX. The functions have params which are objects known as properties. Props are objects which are an unordered list of a variety of data forms including methods, as well as primitive data types (strings, booleans, numbers) and complex data types - nested objects and arrays.

With the Hooks API (2019), functional components can access state and therefore are no longer considered 'dumb' components. 

There are no breaking changes and are 100% backwards compatible. Functional Components can now use the API and the method ``` useState Hook``` to access state and React LifeCycle methods.
 
Functional components must return a parent div that nests any other components or JSX tags.

It is recommended to use functional components where possible. 

Functional components do not have the ```this``` key word as it has no reference to state or the underlying data of the components.

Functional component under the hood

```
const ComponentName = (props) => { return (<JSX>)}
```
The sample JSX needs a parent div-tag

```
<div><h1>I am a functional component </h1></div>
```
Class, Container, Stateful or smart components contain state - or the underlying data that determines how the information on a page changes. Each component manages a private state in a JavaScript class. 

Using the JavaScript class syntax, a class that is named, extends the React Library's Class Component methods to render JSX but with more complex data held in both props and state and with the life-cycle methods that need to be followed to render the ui of the component.

Class component under the hood

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

Class Components are feature rich as they use ES-6 classes to extend the methods in the React Component library. Classes which are JavaScript functions, in the case of a React Class Component must return the UI in the ```render()``` method.

The Component library has several life-cycle methods that help with the rendering of the data to the Virtual DOM as well as the root HTML node and the real DOM. 

These components hold complex logic and the React Library's inbuilt methods - or the lifecycle of the component from when it mounts to when it unmounts. 

Class components can also receive props to update the user interface. These props are passed as params of the constructor in the component ```constructor(props)```. 

Class components must have a render method to display the information held in the state - or underlying data of the page. The ES-6 class constructor holds the state in the form on a JavaScript object - referred to as the component's state.

Class components are often used in forms where state or data is received from the user as an input and has to upate the initial state (an empty form field) and this data is then captured and sent via an API-call to a back end data-base.

Once again with the introduction of Hooks, functional components can be use with the ```useEffect()``` method invoked.

Class functions are traditionally used as it offers dynamic updating of state with the ```setState()``` method. However with props, they are immutable and can not change.

For more details on each type of component refer to the functional-component and stateful-component docs
