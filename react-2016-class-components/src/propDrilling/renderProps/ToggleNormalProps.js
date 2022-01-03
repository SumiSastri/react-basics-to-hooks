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
        {this.state.on && (
          <h1>I am a standard-props toggle (can't be reused)</h1>
        )}
        {this.state.on && this.props.children}
        <button className="btn-danger" onClick={this.handleToggle}>
          DEMO: I am a standard prop that can not be reused click me
        </button>
      </div>
    );
  }
}

export default ToggleNormalProps;
