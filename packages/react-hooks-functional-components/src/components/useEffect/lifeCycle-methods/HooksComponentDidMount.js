import React, { useState, useEffect } from "react";

const HooksComponentDidMount = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (event) => {
    console.log("Mouse position");
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    // subscribing to event listeners
    window.addEventListener("mousemove", logMousePosition);
  }, []);

  return (
    <div>
      <h3>
        Demo 3: useEffect simulating ComponentDidMount - without the component
        Unmounting
      </h3>
      <p className='text-danger'>
        The X-Y co-ordinates of the mouse are logged in google console. To turn
        off go to the code and comment out this module - demos 3,4 and 5
      </p>
      Mouse X Axis: {x}
      Mouse Y Axis: {y}
    </div>
  );
};

export default HooksComponentDidMount;
