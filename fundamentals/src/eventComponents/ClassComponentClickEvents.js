import React, { Component } from "react";

export default class ClassComponentClickEvents extends Component {
  constructor() {
    super();

    this.state = {
      message: "CHANGE ME",
      toggleOn: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  updateData() {
    this.setState({
      message: "CHANGED ON CLICK",
    });
  }

  handleToggle = () => {
    this.setState((state) => ({
      ToggleOn: !state.ToggleOn,
    }));
  };

  render() {
    return (
      <div>
        <h4>
          How does event handling work? Demo: Click events with class components
        </h4>
        <p>
          Class components have state so they are more dynamic, information can
          be changed with a click event. Toggles can be switched on and off by
          changing the information in the constructor, data can be updated.
        </p>
        <p>
          Click button to {this.state.message}
          <button onClick={() => this.updateData()}>Click me</button>
        </p>
        <p>
          Toggles can be switched on and off by changing the information in the
          constructor, data can be updated. If you click the on button it turns
          off and if you turn the off button it turns on based on boolean logic
          and a ternery for conditional rendering.
        </p>
        <button onClick={() => this.handleToggle()}>
          {this.state.ToggleOn ? "Toggle On" : "Toggle Off"}
        </button>
      </div>
    );
  }
}
