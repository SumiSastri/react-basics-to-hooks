import React, { useState } from "react";

export default function UseStateHook() {
  // strings
  const [user, setUser] = useState("Admin");
  const [status, setStatus] = useState("Open");
  //   boolean and controlled input
  const [checkBoxStatus, setCheckBoxStatus] = useState(false);
  handleClickToClose = (event) => {
    event.setStatus("Closed");
  };
  handleClickForBreaks = (event) => {
    event.setStatus("Back in 5 minutes");
  };
  handleClickForUserChange = (event) => {
    event.setUser("NewUser");
  };
  handleCheckBoxStatusChange = (event) => {
    setCheckBoxStatus(event.target.value);
  };
  return (
    <React.Fragment>
      <div>
        <h1>Status:{status}</h1>
        <h2>User:{user}</h2>
        <button onClick={handleClickToClose}>Closed</button>
        {open ? "open" : "closed"}
        <button onClick={handleClickForBreaks}>Taking a break</button>
        {closed ? "closed" : "Taking a break-back in 5"}
        <button onClick={handleClickForUserChange}>New User</button>
        <input
          type="checkbox"
          value={checkBoxStatus}
          onChange={handleCheckBoxStatusChange}
        ></input>
      </div>
    </React.Fragment>
  );
}
