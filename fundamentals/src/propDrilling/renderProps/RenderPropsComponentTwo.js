import React from "react";

function RenderPropsComponentTwo() {
  return (
    <div>
      <div className="card">
        <h4>Render Props: Demo</h4>
        <p>
          Render props are another way of dealing with the challenge of
          prop-drilling. Render props means passing the render method into a
          prop so that it renders the prop. In the first example, the prop is
          rendered with its children in the child toggle component. In the
          second example, we pass the render function into the component to make
          it reusable.
        </p>{" "}
      </div>
    </div>
  );
}

export default RenderPropsComponentTwo;
