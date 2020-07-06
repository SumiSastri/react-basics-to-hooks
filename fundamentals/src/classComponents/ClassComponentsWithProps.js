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
      data: "INITIAL STATE DATA",
    };
  }
  render() {
    return (
      <div>
        <h4>Example 3:</h4>
        <p>
          This JSX tag renders the class component's prop. The prop name for
          this component has been set in the FunctionalComponent. This
          component's props will not be rendered in this class component but
          will be rendered in the Functional component where the value has been
          set.
        </p>
        <p>
          This is the text in the prop with the attribute name:{" "}
          <strong>{this.props.name}</strong>
        </p>
        <h4>Example 4:</h4>
        <p>
          The data has been defined in the constructor method of this component.
          It can also be passed to other components like a prop but is bound to
          the object it points to in the constructor method. Therefore when
          passed it must use the <em>this</em> key word and is referred to as{" "}
          <em>this.props</em>
        </p>
        <strong>This JSX tag renders data in state: </strong>
        {""}
        {this.state.data}
      </div>
    );
  }
}
