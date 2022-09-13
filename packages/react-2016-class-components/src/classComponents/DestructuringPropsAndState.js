import React, { Component } from "react";

export default class ClassComponentWithProps extends Component {
  constructor(props) {
    super();
    this.state = {
      destructuredData:
        `As state is a JavaScript object it can be destructured into each of its key-value pairs. I am the "destructuredData" key with the value of this string`,
    };
  }
  render() {
    const { destructuredData } = this.state;
    // const { name } = this.props;
    return (
      <div>
        <h4>Example 6: Destructuring</h4>
        <p>
          Destructing is a JavaScript concept used for both objects and arrays.
          In React you can destructure props and state as they are both objects.
          With React 2019, arrays are destructured to hold state information.
          Refer to code.
          <br/>
          DEMO: <strong className="text-success">{destructuredData}</strong>
        </p>
      </div>
    );
  }
}
