import React from "react";

export default function HelloWorld(props) {
  return (
    <div>
      <hr></hr>
      <h4>Hello World - this is an example of a functional component</h4>
      <p>
        With the prop attribute of "documentation":{" "}
        <strong>{props.documentation}</strong>
      </p>
    </div>
  );
}
