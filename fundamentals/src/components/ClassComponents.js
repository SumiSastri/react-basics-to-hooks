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
    <div>
      <h4>What is a Class Component and when should you use it?</h4>
      <p>
        Class, Container, Stateful or Smart Components Class components use
        JavaScript ES-6 Classes to extend the the life-cycle methods in the
        React Component Library.{" "}
        <strong>
          Each component is a JavaScript class and has a has a constructor and a
          super method.
        </strong>
      </p>
      <br></br>
      <p>
        Super calls upon the constructor method to access the pre-built methods
        in the React Component Library. Components render the data from props or
        in component state.{""}
        <em>Render is the only mandatory life-cycle method.</em> Without the
        render method, the function gets executed in the console but will not be
        rendered to the DOM.
      </p>
      <br></br>
      <p>
        The constructor method holds the components state, or the underlying
        data of the component in an object. The only place where state should be
        referred to as <em>this.state</em> is in the constructor method after
        the super method is called.
      </p>
      <br></br>
      <p>
        The other life-cycle methods hold complex logic allowing for data to be
        accessed via 3rd party API's and for the data in state to be updated.
        The <em>componentDidMount()</em> method takes a call-back{" "}
        <em>setState({})</em> method which takes as an argument a new object
        that represents how state has been changed.{" "}
      </p>
      <br></br>
      <p>
        To handle changes in the JSX elements that are being rendered, factory
        functions are written to handle events such as clicks, submit buttons,
        etc.{" "}
      </p>
      <hr></hr>
      <p> Here are some examples of class components and how they are used</p>
      <ClassComponentExample />
      <ClassComponentWithState />
      <ClassComponentWithImageInState />
      <ClassComponentWithProps name="class-component-props" />
      <ClassComponentsWithPropsAsMethods />
      <DestructuringPropsAndState />
      <UpdateState />
      <p>LifeCycle methods in class components: Demo</p>
      <ComponentMountMethods />
      <ComponentUpdateMethods />
      <ComponentWillUnmount />
    </div>
  );
}
