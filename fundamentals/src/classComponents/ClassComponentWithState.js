import React, { Component } from "react";

export class ClassComponentWithState extends Component {
  constructor() {
    super();

    this.state = {
      data: "INITIAL STATE DATA",
    };
  }
  render() {
    return (
      <div>
        <h4>Example 2: Stateful components</h4>
        <p>
          Here state is defined as a string in the constructor method. The
          constructor and the super methods are immediately invoked and then
          rendered. The data in state that is rendered here is:{" "}
          {this.state.data}
        </p>
      </div>
    );
  }
}
