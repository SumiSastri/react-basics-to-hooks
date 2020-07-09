import React, { Component } from "react";

import ChildComponentMountMethod from "./ChildComponentMountMethod";

export class ComponentMountMethods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Life-cycle methods",
    };
    console.log(`logs PARENT constructor 1`);
  }

  componentDidMount() {
    console.log(`logs PARENT componentDidMount 4 `);
  }
  static getDerivedStateFromProps(props, state) {
    console.log(`logs PARENT getDerivedStateFromProps 2 `);
    return null;
  }

  shouldComponentUpdate() {
    console.log(`logs PARENT shouldComponentUpdate`);
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log(`logs PARENT getSnapshot`);
    return null;
  }
  componentDidUpdate() {
    console.log(`logs PARENT componentDidUpdate`);
  }
  componentWillUnmount() {
    console.log(` logs PARENT willUnmount when you click to another page`);
    return true;
  }
  changeStateForLifeCycleMethods = () => {
    this.setState({
      state: "update life-cycle methods and check console",
    });
  };

  render() {
    console.log(`logs PARENT render 3`);
    return (
      <div>
        <h4>Class Components LifeCycle Methods</h4>
        <h4>DEMO: Mounting</h4>

        <p>
          This is the list of life-cycle methods - open the console, as soon as
          the class component is called you will see the logs of these methods
          in the order that they are called in the call stack.The lifecycle
          phase componentDidMount is the only place where you can update and
          setState after the constructor method defines the immutable state
          object.
        </p>

        <li>
          1. constructor()
          <em>
            immediately invoked whenever a new class component is created,sets
            and initialises state/ bind events
          </em>
        </li>
        <li>
          super()
          <em>
            Not mandatory, constructor and super called first to access
            component library/ passes imported props
          </em>
        </li>

        <li>
          2. getDerivedStateFromProps()
          <em>
            rarely used method called after constructor and super methods in
            case there is a change in props. over time, does not have access to
            the <em>this</em> key word
          </em>
        </li>
        <li>
          3. render(){" "}
          <em>
            The only mandatory method in a class component. It reads props and
            state renders JSX in UI in the mount phase. Checks for updates in
            the update phase. It is a pure function, should always render the
            same output. State should be invoked not set here.
          </em>
        </li>
        <li>
          componentDidMount()
          <em>
            The child component mounts AFTER the parent component mounts. The
            parent component mounts or is inserted into the DOM first.
            Initialise DOM nodes/ make network (HTTP requests) here.
          </em>
        </li>
        <div>
          <p></p>
        </div>
        <div>
          <h4>DEMO: Updating</h4>
          <li>
            1. getDerivedStateFromProps{" "}
            <em>
              invoked again renders props/state or null everytime a component
              needs to be rendered again, rarely used method
            </em>
          </li>
          <li>
            2. shouldComponentUpdate{" "}
            <em>
              is called only if there is a change in parent in parent component,
              renders nextProps or nextState when updated, here is where you can
              set the prevent default render methods and used for performance
              optimisation, rarely used
            </em>
          </li>
          <li>
            3. render<em>invoked again and state/ props / JSX rendered</em>
          </li>
          <li>
            <strong>
              Methods 1,2 & 3 are then invoked in parent first then child
              components invoke the 3 methods in the same order, following the
              parent.
            </strong>
          </li>
          <li>
            4. getSnapshotBeforeUpdate()
            <em>
              now the order changes - child called before the parent registering
              a snapshot of current state from previousState and previousProps
              of the component on the virtual-DOM, returns null or a value,
              rarely used method.
            </em>
          </li>
          <li>
            5. componentDidUpdate()
            <em>
              If there are any changes the componentDidUpdate is called, it
              takes the getSnapshotBeforeUpdate method, previousState and
              previousProps as args. The child component updates first, THEN
              only does the parent update. Can make AJAX calls by comparing the
              previous state/props and current state/props
            </em>
          </li>
          <li>
            <strong>
              Methods 4&5 show an anti-pattern, invoked first in the child
              components, then invoked in the same order by the parent.
            </strong>
          </li>
        </div>
        <button onClick={this.changeStateForLifeCycleMethods}>
          Click me and check console to see how parent and child component
          lifecycle methods are called in the stack
        </button>
        <ChildComponentMountMethod />
      </div>
    );
  }
}

export default ComponentMountMethods;
