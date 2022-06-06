import React, { Component } from "react";

export class UpdateState extends Component {
  constructor() {
    super();

    this.state = {
      data: "I am the initial data in the state object",
    };
  }

  updateData() {
    this.setState({
      data: "I have been updated with the setState Method",
    });
  }

  render() {
    return (
      <div>
        <h4>Example 7: setState to update data in the state object </h4>
        <p>
          State as an object is readable and writable. However if you change
          state directly in the constructor method it will update in the console
          and will not be rendered. To render data held in state you must use
          the setState() method. DEMO: Click the button below to update the data
          in state.
        </p>
        <p>
          State: <span className="badge">{this.state.data}</span>
        </p>
        <button className="btn-light" onClick={() => this.updateData()}>
          Click me
        </button>
      </div>
    );
  }
}
