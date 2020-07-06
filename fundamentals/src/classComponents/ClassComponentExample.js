import React, { Component } from "react";

export class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h4>Example 1:</h4>
        <p>
          This is a class based component with no data in the State object.
          Class components do not have to have a state but they must have a
          render method.
        </p>
      </div>
    );
  }
}

export default ClassComponent;
