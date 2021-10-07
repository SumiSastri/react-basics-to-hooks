The purpose of this documentation is to outline what a Class-based Component is in React and and when should you use it.

__What is a Class-based Component in React?__

Class, Container, Stateful or Smart components contain State. State is the underlying data of a user interface. 



In a Class Component, the intial state is rendered first. Everytime the user-interacts with the page, the data on the page changes and the component is updated and re-rendered. Without the render method, the function gets executed in the console but will not be rendered to the DOM.

As the purpose of the Class component is to render and update any data changes on a page, a single, void method ```React.Component.render()``` is a mandatory call-back function. 

The render method's job is to return JSX and display the state of the component and its props.

State is always represented as a JavaScript object.

Class-based components use JavaScript ES-6 Classes to extend the the life-cycle methods in the React Component Library. 

The React Library's inbuilt life-cycle methods, render is the only mandatory life-cycle method.

To get the boiler plate if you have a snippets extension on VSCode, the short code is rce (React-ClassComponent-Extends ReactComponent). 

```
import React, { Component } from "react";

export class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h3>
          Hello World is a class based component with no data in the State
          object
        </h3>
      </div>
    );
  }
}

export default ClassComponent;
```
