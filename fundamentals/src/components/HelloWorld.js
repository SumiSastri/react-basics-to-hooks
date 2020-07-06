import React from "react";

export default function HelloWorld(props) {
  return (
    <div>
      <h4>Hello World - this is a functional component</h4>
      <div>{props.documentation}</div>
    </div>
  );
}
