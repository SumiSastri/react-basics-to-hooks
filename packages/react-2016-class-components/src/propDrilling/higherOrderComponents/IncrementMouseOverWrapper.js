import React, { Component } from "react";

import withCountersHoC from "./withCountersHoC";

class IncrementMouseOverWrapper extends Component {
  render() {
    const { count, addOneToCounter } = this.props;
    return (
      <div>
        <button onMouseOver={addOneToCounter}>
          Shows {count} when the you hover over button
        </button>
      </div>
    );
  }
}

export default withCountersHoC(IncrementMouseOverWrapper);
