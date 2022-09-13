import React, { Component } from "react";

export class ClassComponentWithState extends Component {
  constructor() {
    super();

    this.state = {
      data: "I am string in the state object",
    };
  }
  render() {
    return (
      <div>
        <h4>Example 2: Stateful components</h4>
        <p>
          In class components, the constructor() and the super() methods are
          immediately invoked and then rendered in the render() method.

          Just after the super() method, local state is declared. As it is in a JavaScript class
          this local state must use the <em>this</em> key word. The state points to the class
          object - in this case the React component that it points to.
          
          <br/>
          DEMO: The data held in state in this demo is a simple string - I am a string in the state object. 
          In the render() method, the callback function <em>this.state.data</em> is called - the render then displays the data in the state object 
          of the class. Using prototypal inheritance a copy of state is painted in the render method and you see 
          the string: 
          {""}
          <span className="text-primary">{this.state.data}</span>
        </p>
      </div>
    );
  }
}
