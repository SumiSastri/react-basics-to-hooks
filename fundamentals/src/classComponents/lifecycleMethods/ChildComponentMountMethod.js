import React, { Component } from "react";

export class ChildComponentMountMethod extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Life-cycle methods",
    };
    console.log(`CHILD component constructor logged 1`);
  }

  componentDidMount() {
    console.log(`CHILD component componentDidMount 4`);
  }
  static getDerivedStateFromProps(props, state) {
    console.log(`CHILD derivedState method 2 `);
    return null;
  }
  shouldComponentUpdate() {
    console.log(`CHILD shouldComponentUpdate method`);
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log(`CHILd logs getSnapshot`);
    return null;
  }

  componentDidUpdate() {
    console.log(`CHILD componentDidupdate method`);
  }
  componentWillUnmount() {
    console.log(`CHILD willUnmount when you click to another page`);
    return true;
  }
  render() {
    console.log(`CHILD render 3`);
    return (
      <div>
        <h5>
          This is the associated CHILD component of the life-cycle methods - it
          is exactly the same as the first component BUT is rendered as a prop
          in the parent component.
        </h5>{" "}
      </div>
    );
  }
}

export default ChildComponentMountMethod;
