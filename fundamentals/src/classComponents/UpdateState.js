import React, { Component } from "react";

export class UpdateState extends Component {
  constructor() {
    super();

    this.state = {
      data: "INITIAL STATE DATA",
    };
  }

  updateData() {
    this.setState({
      data: "SET STATE SUCCESSFUL",
    });
  }

  render() {
    return (
      <div>
        <h4>Example 7: </h4>
        <p>
          In this class component we are updating state using the{" "}
          <em>setState</em> method. Intial state reads: {""} {this.state.data}
        </p>
        <button onClick={() => this.updateData()}>
          Click event handler updates intial state with the setState() method
        </button>
        <p>
          The <em>setState</em>method has been written as a factory function and
          passed into the onClick handler to udpate the data in state. If you
          click the button the text in the inital state reads will change.
        </p>
      </div>
    );
  }
}
