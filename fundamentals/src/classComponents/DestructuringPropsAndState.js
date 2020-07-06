import React, { Component } from "react";

export default class ClassComponentWithProps extends Component {
  constructor(props) {
    super();
    this.state = {
      data: "DESTRUCTURING STATE",
    };
  }
  render() {
    const { data } = this.state;
    // const { name } = this.props;
    return (
      <div>
        <h4>Example 6:</h4>
        <p>
          In this JSX expression we are destructuring state. The state object is
          a string that reads:{""}
          <strong>{data}</strong>
        </p>
      </div>
    );
  }
}
