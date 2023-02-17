import React, { useState } from "react";

export default function HooksWithBooleans() {
  // strings
  const [isOpen, setIsOpen] = useState("Open");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <h3>Demo 3 - Strings and Booleans</h3>
      <div className='badge'>
        <p className='alert'>Click to close</p>
        <button onClick={() => setIsOpen("Closed")}>
          This shop is {isOpen}
        </button>
      </div>
      <div className='badge'>
        <p>Check the box if you want the shop opened</p>
        <input
          type='checkbox'
          value={isChecked}
          onClick={() => setIsChecked(true)}
        />
      </div>
    </div>
  );
}
