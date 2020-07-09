import React, { Component } from "react";

export class UpdateState extends Component {
  constructor() {
    super();

    this.state = {
      data: "Placeholder: This is the initial state data",
    };
  }

  updateData() {
    this.setState({
      data: "Updating state: with the updateData method to setState ",
    });
  }

  render() {
    return (
      <div>
        <h4>Example 7: setState to update data in the state object </h4>
        <p>
          State is immutable and should not be updated in the constructor
          method. Click the button below to update the data in state.
        </p>
        <p>
          State: <strong>{this.state.data}</strong>
        </p>
        <button onClick={() => this.updateData()}>
          Click to demo state data updating with the setState method
        </button>
        <p>
          The <em>setState</em>method has been written as a factory function and
          passed into the onClick handler to udpate the data in state.
        </p>
      </div>
    );
  }
}
