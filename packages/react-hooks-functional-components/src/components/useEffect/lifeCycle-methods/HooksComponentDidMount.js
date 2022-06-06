import React, { useState, useEffect } from "react";

function HooksComponentDidMount() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (event) => {
    console.log("Mouse position");
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
  }, []);

  return (
    <div>
      <h4>
        Hooks with useEffect for ComponentDidMount without the component
        Unmounting
      </h4>
      Mouse X Axis: {x}
      Mouse Y Axis: {y}
    </div>
  );
}

export default HooksComponentDidMount;
