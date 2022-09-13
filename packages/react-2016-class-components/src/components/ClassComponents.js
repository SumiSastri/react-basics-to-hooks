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
      <h3>
        What is a class, container, stateful or smart component in React?
      </h3>
      <p>
        React class components are JavaScript classes. Classes are functions that return a prototype.
        In React, the class component returns the updated state of a component using a callback method called <em>setState</em>. 
        The constructor method returns a protoype of a component using JavaScript prototypal class inheritance.
        </p>
        <br/>
        <p>
        Each component, therefore, is a modular blueprint that creates a
        reusable block of code that can be exported and imported into another
        module. A page component, for example, may have nested nav-bar,
        articles, images & buttons components.
      </p>
      <br/>
      <p>Traditionally the difference between a class and functional component was that functional components
        returned pure functions therefore the component could not be updated and changed. With the introduction
        of React Hooks this is no longer the case and therefore React class components are often only seen in legacy
        React apps.
      </p>
      <br/>
      <p>Paradoxically, a class component does not have to contain state.Render is the only mandatory
        life-cycle method. Without the render method, the function gets executed
        in the console but will not be rendered to the DOM.As it is a JavaScript class, 
        each component can set up a constructor method to hold state, or the underlying data of the component in an
        object. Class, container, smart or stateful components are classes with
        predefined methods to access state. This definition with React Hooks is relatively
        meaningless as state can also be accessed in functional components now with the <em>useState</em> {" "}
        method.
      </p>
      <br />
      <h3>
        What are life-cycle methods in a class component?
      </h3>
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
      <p>With React Hooks, these methods are abstracted out of the component into the Hooks library
        methods - useState() and useEffect()
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
