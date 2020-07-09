import React from "react";

function GrandChild2({ description, children }) {
  return (
    <div>
      <h3>I am GrandChild2{description}</h3>
      <p>I want my children to be rendered{children}</p>
    </div>
  );
}

export default GrandChild2;
