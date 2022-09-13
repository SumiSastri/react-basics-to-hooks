import React, { Component } from "react";

export class ClassComponentWithProps extends Component {
  static defaultProps = {
    name: "This is the data in the static defaultProps object in a class component it is written before the constructor",
  };
  // static propTypes = {
  //   name: ProptTypes.string.isRequired,
  // };
  constructor(props) {
    super();
    this.state = {
      data: "Placeholder: Change-me",
    };
  }
  render() {
    return (
      <div>
        <br/>
        <h4>
          Example 3: Rendering props with class components using the key word{" "}
          <em>this</em>
        </h4>
        <p>
          Props follow the same pattern where the child component renders the
          props set by the parent component. Props are arguments of the constructor() method.
          DEMO:
          <strong>{this.props.description}</strong>
        </p>
        <br />
        <h4>Example 4: Static Props defined in class components</h4>
        <p>
          In class components, props can also be defined as static default props
          and passed to the child. DEMO:
          <span className="text-dark"> {this.props.name}</span>
        </p>
      </div>
    );
  }
}
