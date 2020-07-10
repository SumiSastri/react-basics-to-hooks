import React, { Component } from "react";

class ToggleNormalProps extends Component {
  state = {
    on: false,
  };

  handleToggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  render() {
    return (
      <div>
        {this.state.on && <h1>I am a standard-props toggle</h1>}
        {this.state.on && this.props.children}
        <button onClick={this.handleToggle}>Click to show</button>
      </div>
    );
  }
}

export default ToggleNormalProps;
