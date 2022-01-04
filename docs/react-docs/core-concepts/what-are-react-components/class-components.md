# Class-based Components

The purpose of this document is to outline what a class-based component is in React and and when should you use it.

Documentation on class-based components [https://reactjs.org/docs/state-and-lifecycle.html]

**What is a Class-based Component in React?**

The class-based components use JavaScript ES-6 classes to extend the the life-cycle methods in the React Component Library, `state` is always represented as a JavaScript object and therefore has all the properties of a plain JavaScript object. As React uses JavaScript syntax and no bespoke syntax, a class-based component is just JavaScript under the hood.

To break it down further, Class, Container, Stateful or Smart components contain the `state` object, where `state` is the underlying data of a user interface. The use of the `this` key word is bound to the `state` object only in the component that holds the unique `state` of the object.

In a class-based Component, the initial state is rendered first.

Everytime the user-interacts with the page, the data on the page changes and the Component is updated and re-rendered. This updating of the `state` object happens with the `setState()` method. The `this` key word is used to set state `this.setState()` to bind the function to the class-based components `constructor()` method.

Without the `render()` method, the `setState()` method gets executed in the console but will not be rendered to the DOM.

As the purpose of the class-based component is to render and update any data changes on a page, a single, void method `React.Component.render()` is a mandatory call-back function.

The `render()` method's job is to return JSX elements and display the `state` of the component and its `props` in the user-interface (UI).

It is worth repeating - as the `state` object determines how the Component is updated and re-rendered, class-based components must have a `render()` method to display the information held in the `state` object. Without the `render()` method, the function gets executed in the console but will not be rendered to the DOM. The `constructor()` method is NOT mandatory.

To access the other methods of the React Component Library, JavaScript class syntax is used. Class-based components use the JavaScript `constructor()` and a `super()` methods. The `super()` method calls upon the `constructor()` method in the React Component Library.

The class-based React Component now is able to access the React pre-built life-cycle methods that help with the rendering of the data to the Virtual-DOM. Changing `state` in the Virtual-DOM first, the changes once compiled correctly are passed to the root-HTML node and the real-DOM-API. Each virtual Node created in the React Virtual-DOM is referred to as a `React.Node` as it is a method to create a virtual node and JSX elements.

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
