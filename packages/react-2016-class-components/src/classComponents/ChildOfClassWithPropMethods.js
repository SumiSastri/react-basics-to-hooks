import React from "react";

function ChildOfClassWithPropMethods(props) {
  return (
    <div>
      <br/>
      <h4>Example 5: Child component</h4>
      <p>
        This is the child component. The displaySalary() method which is a call back function
        of the calculateSalary() method is rendered in this child component as a renderProps() method. 
        This is a React anti-pattern.
         
        In the onClick in the child component, method we pass the props from the class based component into the click
        event. The prop is rendered in the child component. The params are
        defined in the child component and passed to the parent where they are
        used (refer to the code).
      </p>
      <button
        className="btn-pink"
        onClick={() =>
          props.displaySalary()
        }
      >
        Click to demo the renderProps pattern
      </button>
    </div>
  );
}

export default ChildOfClassWithPropMethods;
