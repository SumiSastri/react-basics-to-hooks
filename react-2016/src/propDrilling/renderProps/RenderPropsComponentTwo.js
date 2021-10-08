import React from "react";

function RenderPropsComponentTwo() {
  return (
    <div>
      <div className="card">
        <h4>Render Props: Demo</h4>
        <p>
          Render props helps you share code between components and is another
          way of dealing with the challenge of prop-drilling. A render method is
          written (that does not conflict with the lifecycle render method) as a
          prop. It then acts like a mini-functional component and is more
          extensible. In the first example, the standard-method of rendering
          props and the children of props is not extensible.
        </p>{" "}
      </div>
    </div>
  );
}

export default RenderPropsComponentTwo;
