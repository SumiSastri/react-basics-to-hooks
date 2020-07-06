import React, { Component } from "react";

export class RenderPropsComponentTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((previousState) => {
      return { count: previousState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <h4>Render props and the challenge of prop-drilling</h4>
        <button onClick={this.incrementCount}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default RenderPropsComponentTwo;
