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
    return (
      <div>
        <h4>Example 1: Setting and clearing intervals</h4>
        <li>
          componentDidMount() Here is where we have set the interval, the timer
          will update every 1 second
        </li>
        <li>
          componentWillUnmount()Here we clear the interval, when you move off
          the page the timer also stops.
        </li>
        SECONDS PASSED SINCE YOU STARTED READING THIS PAGE: {""}
        <strong>{this.state.count}</strong>
      </div>
    );
  }
}

export default SetAndClearIntervals;
