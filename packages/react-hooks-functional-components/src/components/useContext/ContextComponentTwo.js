import React from "react";

import "../../App.css";

import ContextComponentOne from "./ContextComponentOne";

const ContextComponentTwo = () => {
  return (
    <div>
      <h4>Context Component Two</h4>
      <p>Component 2 nests Component 1</p>
      <ContextComponentOne />
    </div>
  );
};

export default ContextComponentTwo;
