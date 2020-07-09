import React, { Component } from "react";

import SetAndClearIntervals from "./SetAndClearIntervals";
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
        <h4>DEMO: Unmounting Phase</h4>
        <li>
          componentWillUnmount()
          <em>
            Only one method available invoked when you click away from current
            page
          </em>
        </li>
        <p>
          This is a rarely used method. It is involed for clearing setIntervals
          and other tidy-up functions before the component is unmounted and the
          life-cycle methods cease. Only one method is available in this phase.
        </p>
        <SetAndClearIntervals />
        <div>
          {" "}
          Component Will Unmount Mouse Position X - {this.state.x} Mouse
          Position Y - {this.state.y}
        </div>
      </div>
    );
  }
}

export default ComponentWillUnmount;
