import React, { Component } from "react";

import withCounterHoC from "./withCountersHoC";

class DecrementOnClickWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  handleDecrementCountOnClick = () => {
    this.setState((previousState) => {
      return { count: previousState.count - 1 };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.handleDecrementCountOnClick}>
          Shows {count} when the {this.props.name} clicks button
        </button>
      </div>
    );
  }
}

export default withCounterHoC(DecrementOnClickWrapper);
