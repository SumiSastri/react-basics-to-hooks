import React, { Component } from "react";

export class ClassPreviousStateCounter extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  incrementVolume() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(`Asynchronous callback log value, ${this.state.count}`);
      }
    );
    console.log(`Synchronous log value, ${this.state.count}`);
  }

  incrementbyThree() {
    this.incrementVolume();
    this.incrementVolume();
    this.incrementVolume();
  }

  incrementByFive() {
    this.setState((previousState) => ({
      count: previousState.count + 5,
    }));
    console.log(`Logs async value: ${this.state.count}`);
  }

  render() {
    return (
      <div>
        <h4>Volume level {this.state.count}</h4>
        <button className="btn-blue" onClick={() => this.incrementVolume()}>
          Increase volume by 1 decibal
        </button>
        <button className="btn-danger" onClick={() => this.incrementbyThree()}>
          Increase by 3 BUG!
        </button>
        <button className="btn-success" onClick={() => this.incrementByFive()}>
          Increase volume by 5 decibals
        </button>
      </div>
    );
  }
}

export default ClassPreviousStateCounter;
