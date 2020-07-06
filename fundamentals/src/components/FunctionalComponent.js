import React from "react";

import HelloWorld from "../components/HelloWorld";
import { ClassComponentWithProps } from "../classComponents/ClassComponentsWithProps";

export default function FunctionalComponent() {
  return (
    <div>
      <h4>What is a functional component and when should you use it?</h4>
      <p>
        A functional component is a JavaScript function renders JSX elements and
        props. They were also known as presentational or dumb components as they
        could not access state or lifecycle methods available in stateful
        components and were considered static components.
      </p>
      <p>
        Functional components return a parent div that nests any other
        components, JSX elements or props. Functions can be imported or exported
        as props and they are modular and reusable keeping to codings'
        DRY(do-not-repeat-yourself) principle.
      </p>
      <p>
        With the introduction of the Hooks API (2018), functional components can
        access state and therefore are no longer considered 'dumb' or purely
        presentational components. Using the API and the
        <em>useState</em> Hook to access state, they can access React LifeCycle
        methods and data in state.
      </p>
      <p>
        As they are written as a JavaScript function and not a JavaScript class
        there is no need to use the <em>this</em> key word. They are pure
        functions with no side-effects - which means their behaviour is
        predictable as they will always render the same information that is
        passed into the return or render statements.
      </p>
      <p>
        As smart components use JavaScript classes, when props and methods are
        passed to a class component, unintended side-effects occur by the
        incorrect use of the <em>this</em> key word.
      </p>
      <p>
        When used in the constructor method, the <em>this</em> key word in
        <em>this.state({})</em> initialises the state and will render
        information in the initial state. In the render method, when state is
        updated by life-cycle methods, <em>this.state</em> now points to the
        state in the <em>setState({})</em> method. If used incorrectly, it may
        not refer either to data in state, the updated state or previous state -
        it could actually refer to the global <em>window</em> object and throw
        exceptions.
      </p>
      <p>
        It is now recommended that Hooks are used to replace class components
        with functional components. There are no breaking changes and are 100%
        backwards compatible. Class-based components can still be used and do
        not need to be refactored if they are already in an app.
      </p>
      <h4>What is the difference between passing data from state and props?</h4>
      <p>
        Components have additional properties or props to make the rendering the
        component more dynamic.
      </p>
      <p>
        Props are attributes that are defined within the parent component JSX
        tags. It is an object and is defined as a key-value pair. Prop key-value
        pairs can be primitive data types (strings, booleans, numbers).As
        functions are basically objects with a code block for execution under
        the hood, functions can also be defined in props, so can complex data
        types like arrays and all the methods associated with arrays - like{" "}
        <em>map, filter, reduce </em>(higher order functions) - as well as
        simple methods such as<em>to.String()</em>
      </p>
      <p>
        Props are passed to both functional and class components. When props are
        passed to a class component, the key word <em>this</em> must be used as
        a class component uses JavaScript classes while functional components
        are pure components with no side effects.
      </p>
      <p>
        State is also an object like a prop, it is held in the constructor
        function of a class component. The data is bound to the object it points
        to - the class component where it has been defined and follows all norms
        of data held in the constructor of a class. Therefore all data that is
        derived from state is referred to as <em>this.state({})</em>.
      </p>
      <hr></hr>
      <h4>Examples of props</h4>
      <p>
        The component HelloWorld that was created as a functional component as
        the first test component in this app has been imported into another
        component - the FunctionalComponent created for this tutorial.
      </p>
      <p>
        In the JSX of the HelloWorld component, we have defined documentation as
        a prop, this prop takes a JSX expression to render the prop in a
        paragraph tag showing the documentation of this tutorial comes from the
        official React documentation. To use the prop, we pass documentation as
        a param in the HelloWorld component which holds the function and pass
        the param in another JSX tag to hold the expression.
      </p>
      <h6>Prop example from a functional component</h6>
      <HelloWorld
        documentation={
          <div>
            <strong>I am a prop of a functional component.</strong> Find the
            documentation for all things React in this app here:
            <a href="https://reactjs.org/docs/getting-started.html">
              React Documentation
            </a>
          </div>
        }
      />
      <p>
        In the example below we have given a classbased component a prop called
        name. This component has also been imported into the Functional
        Component. It has been given an attribute(prop) called name. This
        component aslo has state which is rendered in this component.
      </p>
      <h6>
        Prop example from a class component - this renders both the state of the
        component and the prop
      </h6>
      <ClassComponentWithProps name="I am a prop of a class component" />
    </div>
  );
}
