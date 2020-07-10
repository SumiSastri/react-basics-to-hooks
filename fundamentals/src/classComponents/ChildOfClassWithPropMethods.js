import React from "react";

function ChildOfClassWithPropMethods(props) {
  return (
    <div>
      <h4>
        Example 5 Child component: defines the args and passes them as props to
        the parent
      </h4>
      <p>
        This is the child component of the calculate salary method. The
        calculate salary which multiples the data in state by 12 is written in
        the parent component. In the onClick method we pass the props from the
        class based component into the click event. The prop is rendered in the
        child component.
      </p>
      <button
        className="btn-pink"
        onClick={() =>
          props.displaySalary("NOTE: TAX HAS NOT BEEN DEDUCTED", "Tax is 40%")
        }
      >
        Click prop in the child component to render the displaySalary method.
        The params are defined in the child component and passed to the parent
        where they are used.
      </button>
    </div>
  );
}

export default ChildOfClassWithPropMethods;
