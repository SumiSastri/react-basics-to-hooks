import React, { Component } from "react";

import withCounterHoC from "./withCountersHoC";

class DecrementMouseOverWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  handleDecrementCountOnMouseOver = () => {
    this.setState((previousState) => {
      return { count: previousState.count - 1 };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onMouseOver={this.handleDecrementCountOnMouseOver}>
          Shows {count} when the {this.props.name} hovers over this button
        </button>
      </div>
    );
  }
}

export default withCounterHoC(DecrementMouseOverWrapper);
