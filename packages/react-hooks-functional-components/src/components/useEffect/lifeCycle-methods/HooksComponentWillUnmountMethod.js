import React, { useState, useEffect } from "react";

const HooksComponentWillUnmountMethod = () => {
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
    return () => {
      console.log(`component unmounts with useEffect Hook`);
      window.removeEventListener("mousemove", logMousePosition);
    };
    // the empty array means that the method is not dependent on any props or state
  }, []);

  return (
    <div>
      <h3>Demo 5: useEffect for ComponentDidMount & ComponentWillUnmount</h3>
      <p className='text-danger'>
        The X-Y co-ordinates of the mouse are logged in google console. To turn
        off go to the code and comment out this module - demos 3,4 and 5
      </p>
      Mouse X Axis: {x}
      Mouse Y Axis: {y}
    </div>
  );
};

export default HooksComponentWillUnmountMethod;
