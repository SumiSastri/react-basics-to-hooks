import React, { Component } from "react";

import ChildComponentMountMethod from "./ChildComponentMountMethod";

export class ComponentMountMethods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Life-cycle methods",
    };
    console.log(`logs constructor 1`);
  }

  componentDidMount() {
    console.log(`logs componentDidMount 4 `);
  }
  static getDerivedStateFromProps(props, state) {
    console.log(`logs getDerivedStateFromProps 2 `);
    return null;
  }

  shouldComponentUpdate() {
    console.log(`logs shouldComponentUpdate`);
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log(`logs getSnapshot`);
    return null;
  }
  componentDidUpdate() {
    console.log(`logs componentDidUpdate`);
  }
  componentWillUnmount() {
    console.log(` logs willUnmount when you click to another page`);
    return true;
  }
  changeStateForLifeCycleMethods = () => {
    this.setState({
      state: "update life-cycle methods and check console",
    });
  };

  render() {
    console.log(`logs render 3`);
    return (
      <div>
        <h4>Class Components LifeCycle Methods: Demo</h4>
        <p>
          This is the list of life-cycle methods - open the console, as soon as
          the class component is called you will see the logs of these methods
          in the order that they are called in the call stack.
          <li>constructor()</li>
          <li>
            super()
            <em>
              Not mandatory, constructor and super called first to access
              component library
            </em>
          </li>
          <li>
            getDerivedStateFromProps()
            <em>
              rarely used method called after constructor and super methods in
              case there is a change in props
            </em>
          </li>
          <li>
            render(){" "}
            <em>
              The only mandatory method in a class component, renders JSX in UI
              after checking for any updates in state or props.
            </em>
          </li>
          <li>
            componentDidMount()
            <em>
              Called last. The children components are rendered before the
              parent component. The parent component then renders signalling the
              component's successful mounting of the virtual-DOM.
            </em>
          </li>
          <li>
            <strong>
              Now click the button to check how the order of rendering changes
              in the console. The click changes the component state and updates
              it. Now you will see
            </strong>
          </li>
          <li>
            getDerivedStateFromProps <em>logs again parent first then child</em>
          </li>
          <li>
            shouldComponentUpdate <em>is called next</em>
          </li>
          <li>
            render<em>parent and child are rendered again</em>
          </li>
          <li>
            shouldComponentUpdate(){" "}
            <em>called only if there is a change in props</em>
          </li>
          <li>
            getSnapshotBeforeUpdate(
            <em>
              now the order changes - child called before the parent registering
              a snapshot of current state of the component on the virtual-DOM,
              same method logs changes for the parent after the child
            </em>
            )
          </li>
          <li>
            {" "}
            componentDidUpdate()
            <em>
              If there are any changes the componentDidUpdate is called child
              updating first then the parent.
            </em>
          </li>
        </p>
        <button onClick={this.changeStateForLifeCycleMethods}>
          Click me and check console
        </button>
        <ChildComponentMountMethod />
        <p>
          This is also a rarely used method usually for clearing setIntervals
          and other tidy-up functions before the component is unmounted and the
          life-cycle methods cease.
          <li>
            componentWillUnmount()
            <em>
              {" "}
              Click to another section of the app to see the component
              unmounting method. The parent unmounts first then the child
              component.
            </em>
          </li>
        </p>
      </div>
    );
  }
}

export default ComponentMountMethods;
