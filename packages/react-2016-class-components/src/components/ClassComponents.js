import React from "react";

import ClassComponentExample from "../classComponents/ClassComponentExample";
import { ClassComponentWithState } from "../classComponents/ClassComponentWithState";
import { ClassComponentWithImageInState } from "../classComponents/ClassComponentWithImageInState";
import { ClassComponentWithProps } from "../classComponents/ClassComponentsWithProps";
import ClassComponentsWithPropsAsMethods from "../classComponents/ClassComponentsWithPropsAsMethods";
import DestructuringPropsAndState from "../classComponents/DestructuringPropsAndState";
import { UpdateState } from "../classComponents/UpdateState";
import ComponentMountMethods from "../classComponents/lifecycleMethods/ComponentMountMethods";
import ComponentUpdateMethods from "../classComponents/lifecycleMethods/ComponentUpdateMethod";
import ComponentWillUnmount from "../classComponents/lifecycleMethods/ComponentWillUnmount";

export default function ClassComponents() {
  return (
    <div className="card">
      <h4>
        <em>What is a Class component?</em>
      </h4>
      <p>
        Class, container, smart or stateful components are classes with
        predefined methods to access state. Render is the only mandatory
        life-cycle method. Without the render method, the function gets executed
        in the console but will not be rendered to the DOM.
      </p>
      <p>
        As it is a JavaScript class, each component can set up a constructor
        method to hold state, or the underlying data of the component in an
        object. The only place where state should be referred to as
        <em>this.state</em> is in the constructor method, after the super method
        is called.
      </p>
      <br />
      <h4>
        <em>What are the life-cycle methods in a class component?</em>
      </h4>
      <p>
        The key lifecycle methods of class components in the order they are
        invoked are:- 1. constructor() 2. super() 3. static
        getDerivedStateFromProps() 4. render() 5. componentDidMount()
      </p>
      <p>
        If a component updates static getDerivedStateFromProps() is called again
        and then 6. shouldComponentUpdate() 7. getSnapshotBeforeUpdate() 8.
        render() 9. componentDidUpdate()
      </p>
      <p>Once you navigate off a page 10. componentWillUnmount()</p>
      <div className="card">
        <h4> Examples of class components and how they are used</h4>
        <ClassComponentExample />
        <br />
        <ClassComponentWithState />
        <ClassComponentWithImageInState />
        <ClassComponentWithProps description="This is a prop in a class component" />
        <br />
        <ClassComponentsWithPropsAsMethods />
        <br />
        <DestructuringPropsAndState />
        <br />
        <UpdateState />
      </div>
      <div className="card">
        <ComponentMountMethods />
        <ComponentUpdateMethods />
        <ComponentWillUnmount />
      </div>
    </div>
  );
}
