import React from "react";

function ChildOfClassWithPropMethods(props) {
  return (
    <div>
      <h4>Example 5: Child Component</h4>
      <p>
        This is the child component of the calculate salary method. The
        calculate salary which multiples the data in state by 12 is written in
        the parent component. In the onClick method we pass the props from the
        class based component into the click event.
      </p>
      <button
        onClick={() =>
          props.displaySalary("NOTE: TAX HAS NOT BEEN DEDUCTED", "Tax is 40%")
        }
      >
        Click to Get Salary
      </button>
    </div>
  );
}

export default ChildOfClassWithPropMethods;
