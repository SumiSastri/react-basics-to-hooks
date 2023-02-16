import React, { Component } from "react";

export class ClassPreviousStateCounter extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }
  // updates state directly
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
  // uses previous state to update the count
  incrementByFive() {
    this.setState((previousState) => ({
      count: previousState.count + 5,
    }));
    console.log(`Logs async value: ${this.state.count}`);
  }

  render() {
    return (
      <div>
        <h4>Class component async calls</h4>
        <p>
          Open google console and see how the async and sync calls work - the
          display value is 1 but the logged value should be 0
        </p>
        <p>Volume level {this.state.count}</p>
        <button className='btn-blue' onClick={() => this.incrementVolume()}>
          +1
        </button>
        <button className='btn-success' onClick={() => this.incrementByFive()}>
          +5
        </button>
      </div>
    );
  }
}

export default ClassPreviousStateCounter;
