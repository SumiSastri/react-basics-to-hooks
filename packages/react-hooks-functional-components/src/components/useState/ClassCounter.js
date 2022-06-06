import React, { Component } from "react";

import HooksCounter from "./HooksCounter";
import HooksPreviousStateCounter from "./HooksPreviousStateCounter";
import HooksWithArrays from "./HooksWithArrays";
import HooksWithObjects from "./HooksWithObjects";

export class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="card">
        <h2>The useState Hook</h2>
        <h4>I am a counter with a class component</h4>
        <p>Counter set at: {this.state.count}</p>
        <button className="btn-dark" onClick={this.increment}>
          Click to increment - class component
        </button>
        <HooksCounter />
        <HooksPreviousStateCounter />
        <HooksWithArrays />
        <HooksWithObjects />
      </div>
    );
  }
}

export default ClassCounter;
