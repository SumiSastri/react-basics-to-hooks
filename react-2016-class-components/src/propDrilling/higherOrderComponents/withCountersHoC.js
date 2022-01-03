import React from "react";

const withCountersHoC = (WrappedComponents) => {
  class WithCountersHoC extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    addOneToCounter = () => {
      this.setState((previousState) => {
        return { count: previousState.count + 1 };
      });
    };

    render() {
      return (
        <WrappedComponents
          count={this.state.count}
          addOneToCounter={this.addOneToCounter}
        />
      );
    }
  }
  return WithCountersHoC;
};
export default withCountersHoC;
