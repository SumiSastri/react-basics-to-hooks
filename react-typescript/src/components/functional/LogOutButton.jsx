import React from "react";

export default function LogOutButton(props) {
  console.log(props);
  return (
    <div>
      <button onClick={props.onClick}>LogOut</button>
    </div>
  );
}