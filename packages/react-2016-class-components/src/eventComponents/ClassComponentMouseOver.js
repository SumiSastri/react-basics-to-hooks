import React, { Component } from "react";

class ClassComponentMouseOver extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMousePosition = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePosition);
  }

  render() {
    return (
      <div>
        <h4>Example 3</h4>
        <p>
          This is a mouse event that logs the mouse position on the X and Y axis
          every time you move the mouse
        </p>
        Mouse Postion X Axis - {this.state.x} Mouse Postiion Y Axis -{" "}
        {this.state.y}
      </div>
    );
  }
}

export default ClassComponentMouseOver;
