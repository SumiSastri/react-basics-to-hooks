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
        <h4>Event to log Mouse Postion</h4>
        Mouse Postion X Axis - {this.state.x} Mouse Postiion Y Axis -{" "}
        {this.state.y}
      </div>
    );
  }
}

export default ClassComponentMouseOver;
