import React, { Component } from "react";

class ToggleRenderProps extends Component {
  state = {
    on: false,
  };

  handleToggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  render() {
    const { render } = this.props;
    const { on } = this.state;
    return (
      <div>
        <h3> {render({ on: on, handleToggle: this.handleToggle })}</h3>
      </div>
    );
  }
}

export default ToggleRenderProps;
