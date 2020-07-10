import React from "react";

function GrandChild2({ description, children }) {
  return (
    <div>
      <h3 className="text-danger">I am GrandChild2{description}</h3>
      <p>
        <em>I want my children to be rendered{children}</em>
        {""}
      </p>
    </div>
  );
}

export default GrandChild2;
