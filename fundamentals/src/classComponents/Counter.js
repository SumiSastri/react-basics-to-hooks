import React, { Component } from "react";

export class Counter extends Component {
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
      <div className="card">
        <h4>
          How do async calls to the <em>setState</em> method impact the
          execution of code in a class-based components?
        </h4>
        <p>
          The <em>setState({})</em> method works asynchronously. The function is
          called first and then rendered. This can lead to code working not
          quite as we intend it to. This is clear with the counter demo section
          as well as the life-cycle methods of class-based components.
        </p>
        <p>
          The <em>setState</em> method has two parameters, the state object that
          needs to be updated and the second is a call back function. Because
          the method is called asynchronously, when you are rendering numbers in
          a counter component, the console value is one less than the rendered
          value.
        </p>
        <div className="card">
          <h4>Counter Demo</h4>
          <p>
            Click the three buttons and open the developer console to see the
            effect.
          </p>
          <h4>Volume level {this.state.count}</h4>
          <button onClick={() => this.incrementVolume()}>
            Increase volume by 1 decibal
          </button>
          <p>
            Click this button, the console will show 0 while the volume level in
            the JSX tag goes up one.
          </p>
          <button onClick={() => this.incrementbyThree()}>
            Increase by 3 BUG!
          </button>
          <p>
            Click the this button, there will be 3 renders of the click and 3
            updates in the developer console but the JSX tag increases only by
            1. This is because <em>setState</em> method groups together multiple
            calls in the call stack to update state in a single update for
            better performance.
          </p>
          <button onClick={() => this.incrementByFive()}>
            Increase volume by 5 decibals
          </button>
          <p>
            By passing the previous state as a parameter of the call-back
            function, this bug is fixed and when you click the 3rd button volume
            increases by 5, the async call-back will be five less than the
            rendered value in the developer console, just like the first button.
          </p>
        </div>
      </div>
    );
  }
}

export default Counter;
