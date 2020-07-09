import React, { Component } from "react";

export class ClassComponentWithProps extends Component {
  static defaultProps = {
    name: "THIS IS THE STATIC DEFAULT PROP",
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
        <h4>
          Example 3: Rendering props with class components using the key word{" "}
          <em>this</em>
        </h4>
        <p>
          Props follow the same pattern where the child component renders the
          props set by the parent component. This class component is the child
          component and props have been imported as a parameter of the
          constructor method. The prop imported has an attribute description
          with the string:
          <strong>{this.props.description}</strong>
        </p>
        <h4>Example 4: Static Props defined in class components</h4>
        <p>
          In class components, props can be defined in the parent as static
          default props and passed to the child. This prop is defined before the
          constructor method and then can be imported into child components.
          {this.props.name}
        </p>
      </div>
    );
  }
}
