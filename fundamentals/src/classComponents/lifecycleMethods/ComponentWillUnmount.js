import React, { Component } from "react";

class ComponentWillUnmount extends Component {
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

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.logMousePosition);
  }

  render() {
    return (
      <div>
        Component Will Unmount Mouse Position X - {this.state.x} Mouse Position
        Y - {this.state.y}
      </div>
    );
  }
}

export default ComponentWillUnmount;
