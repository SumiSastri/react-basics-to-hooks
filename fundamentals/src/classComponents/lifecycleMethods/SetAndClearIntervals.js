import React, { Component } from "react";

export class SetAndClearIntervals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  setTimer = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    this.interval = setInterval(this.setTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Seconds passed -{this.state.count}</div>;
  }
}

export default SetAndClearIntervals;
