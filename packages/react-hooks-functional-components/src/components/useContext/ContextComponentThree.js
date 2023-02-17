import React from "react";

import "../../App.css";

import ContextComponentTwo from "./ContextComponentTwo";

const ContextComponentThree = () => {
  return (
    <div>
      <h4>Context Component Three</h4>
      <p>Component 3 nests component 2</p>
      <ContextComponentTwo />
    </div>
  );
};

export default ContextComponentThree;
