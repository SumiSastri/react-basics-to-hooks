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
        <h4>DEMO: Child component mounting, updating, unmounting methods</h4>
        <p>
          This is a replica component to demo the call stack order between
          parent and child method invocation. Mounting happens when an instance
          is created and inserted into the DOM. The child component is inserted
          into the DOM (mounts) AFTER the parent. The update pattern is
          different from the mounting pattern, the parent updates first then the
          children follow and are updated later EXCEPT for the
          getSnapshotBeforeUpdate method and componentDidUpdate, where the child
          invokes these methods first then the parent. The unmounting, the
          parent is removed (unmounts) from the DOM first, then the child.
        </p>
      </div>
    );
  }
}

export default ChildComponentMountMethod;
