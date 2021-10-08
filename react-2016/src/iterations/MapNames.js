import React from "react";

function MapNames() {
  const names = ["Ram", "Sita", "Lakshman", "Hanuman"];

  return (
    <div>
      <p>Example 1: Names from an array are mapped in the JSX element</p>
      <div style={pStyles}>
        {names.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>
    </div>
  );
}
const pStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(16, 1fr)",
  gridGap: "1rem",
};
export default MapNames;
