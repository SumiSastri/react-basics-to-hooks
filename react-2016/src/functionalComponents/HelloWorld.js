import React from "react";

// export default function HelloWorld(props) {
// Modern ES-6 way of writing a named function
export const HelloWorld = (props) => {
  return (
    <div>
      <hr></hr>
      <h4>
        Hello World - this is an example of a functional component and a prop
      </h4>
      <p className="badge">
        <strong>Prop demo: {props.documentation}</strong>
      </p>
    </div>
  );
};
export default HelloWorld;
