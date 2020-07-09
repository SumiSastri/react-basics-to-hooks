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
        <h4>Click events with Class Components</h4>
        <p>
          Class components have state so they are more dynamic. State is
          intantiated as immuatable. A setState method is called to update the
          information in state and state is set to the new updated object. The
          function is passed to the event handler and bound to the constructor
          method. This ensures that the click responds to the data in the
          constructor object and that there are no side effects.
        </p>
        <h4>Example 1</h4>
        <p>
          Click button to {this.state.message}
          <button onClick={() => this.updateData()}>Click me</button>
        </p>
        <h4>Example 2</h4>
        <p>
          The toggle boolean data in state is rendered conditionally in this JSX
          button element. The logic can be written within the JSX.
        </p>
        <button onClick={() => this.handleToggle()}>
          {this.state.ToggleOn
            ? "Default: Toggle On (Click to change to: Toggle Off)"
            : "Toggle Off: Click to switch back to default behaviour: Toggle On"}
        </button>
      </div>
    );
  }
}
