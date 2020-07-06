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
        <h4>Example 2:</h4>
        <p>
          This is a class based component. In this component, state is defined
          as a string in the constructor method. The data in state reads:{" "}
          {this.state.data}
        </p>
      </div>
    );
  }
}
