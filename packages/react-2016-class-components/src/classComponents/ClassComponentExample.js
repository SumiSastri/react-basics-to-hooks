import React, { Component } from "react";

export class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h4>Example 1: Stateless class component</h4>
        <p>
          This is a class based component with no data in state. Class
          components do not have to have a state but they must have a render
          method. This component therefore will always render the same data without any
          local state changes.
        </p>
      </div>
    );
  }
}

export default ClassComponent;
