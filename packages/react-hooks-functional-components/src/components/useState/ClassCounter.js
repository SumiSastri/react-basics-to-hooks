import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className='card'>
        <h2>Class Components</h2>
        <h4>Class component counter</h4>
        <p>Counter set at: {this.state.count}</p>
        <button className='btn-dark' onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}

export default ClassCounter;
