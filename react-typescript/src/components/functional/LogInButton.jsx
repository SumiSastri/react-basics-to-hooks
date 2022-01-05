import React from "react";



export default function LogInButton(props) {
  console.log(props);
  return (
    <div>
      <button onClick={props.onClick}>Log-in</button>
    </div>
  );
}