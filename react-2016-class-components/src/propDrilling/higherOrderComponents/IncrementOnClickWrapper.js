import React, { Component } from "react";

import withCountersHoC from "./withCountersHoC";

class IncrementOnClickWrapper extends Component {
  render() {
    const { count, addOneToCounter } = this.props;
    return (
      <div>
        <button onClick={addOneToCounter}>
          Shows {count} when the user clicks button
        </button>
      </div>
    );
  }
}

export default withCountersHoC(IncrementOnClickWrapper);
