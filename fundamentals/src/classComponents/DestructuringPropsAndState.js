import React, { Component } from "react";

export default class ClassComponentWithProps extends Component {
  constructor(props) {
    super();
    this.state = {
      data: "I am the value of the data attribute in state",
    };
  }
  render() {
    const { data } = this.state;
    // const { name } = this.props;
    return (
      <div>
        <h4>Example 6: Destructuring</h4>
        <p>
          In this JSX expression we are destructuring the data attribute in
          state by abstracting the <em>this</em> key word and rendering only the
          data attribute which reads:
          <strong>{data}</strong>
        </p>
      </div>
    );
  }
}
