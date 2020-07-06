import React, { Component } from "react";

import ChildOfClassWithPropMethods from "../classComponents/ChildOfClassWithPropMethods";

export class ClassComponentsWithPropsAsMethods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: "pounds",
      salary: 5000,
    };
  }

  calculateSalary = (param1FromChild, param2FromChild) => {
    alert(
      `Your salary is ${this.state.salary * 12} ${
        this.state.currency
      } per annum (method written in parent multiplies salary by 12) ${param1FromChild} (The note on tax is the first param passed from child to parent) ${param2FromChild} (This is the second param)`
    );
  };

  render() {
    return (
      <div>
        <h4>Example 5: Parent Component for Props passed as methods</h4>
        <p>
          Class components can also pass props from one component to another
          like a functional component. In both class and functional components,
          props can also be methods. Here is an example of a prop which has a
          function written in that calculates the salary and passes this to a
          child component. This is the parent component that holds the function
          to calculate salary and will be displayed by the child component on a
          click event.
        </p>
        <p>
          The child component is now imported into the parent and the key word{" "}
          <em>this.calculateSalary</em>is passed as the value of the prop
          attribute displaySalary{" "}
        </p>
        <ChildOfClassWithPropMethods displaySalary={this.calculateSalary} />
      </div>
    );
  }
}

export default ClassComponentsWithPropsAsMethods;
