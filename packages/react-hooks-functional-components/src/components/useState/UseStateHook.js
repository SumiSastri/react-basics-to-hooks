import React, { useState } from "react";

export default function UseStateHook() {
  // strings
  const [user, setUser] = useState("Admin");
  const [isOpen, setIsOpen] = useState(false);
  //   boolean and controlled input
  const [checkBoxStatus, setCheckBoxStatus] = useState(false);

  const handleClickToClose = (event) => {
    event.setStatus("Closed");
  };
  const handleClickForBreaks = (event) => {
    event.setStatus("Back in 5 minutes");
  };
  const handleClickForUserChange = (event) => {
    event.setUser("NewUser");
  };
  const handleCheckBoxStatusChange = (event) => {
    setCheckBoxStatus(event.target.value);
  };
  return (
    <div>
      <h2>User:{user}</h2>
      <button onClick={handleClickToClose}>Closed</button>
      {isOpen ? "open" : "closed"}
      <button onClick={handleClickForBreaks}>Taking a break</button>
      {!isOpen ? "closed" : "Taking a break-back in 5"}
      <button onClick={handleClickForUserChange}>New User</button>
      <input
        type='checkbox'
        value={checkBoxStatus}
        onChange={handleCheckBoxStatusChange}
      ></input>
    </div>
  );
}
