import React from "react";

//  A functional component is simply a JavaScript function that returns jsx.
// const GreetName= ({props}) => {return(<div> </div>)}

// NAMED EXPORT
export const GreetName = (props) => {
  console.log(props);
  // the param of props is an object
  // (props = {title: title, name: name, petAnimal:petAnimal, children: children})
  //   destructuring the props object
  const { title, name, petAnimal, children } = props;
  // return is a call back method - hence the parenthesis not curly braces
  return (
    <div>
      <h1>
        {title} {name} is my {petAnimal}
      </h1>
      {/* children is an inbuilt prop */}
      {children}
    </div>
  );
};
