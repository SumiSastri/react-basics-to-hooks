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
          In class components, the constructor and the super methods are
          immediately invoked and then rendered. DEMO of data held in state:
          {""}
          <span className="text-primary">{this.state.data}</span>
        </p>
      </div>
    );
  }
}
