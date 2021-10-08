import React from "react";

function MapNumbers() {
  const numbers = [1, 2, 3, 4];
  const listNumbers = numbers.map((eachNumber, index) => (
    <p styles={pStyles} key={index}>
      {eachNumber}
    </p>
  ));
  return (
    <div>
      <p>
        Example 2: The mapping of the array is assigned to variables. The
        variable is passed as an expression into a JSX element in the return
        block.
      </p>
      <li style={pStyles}>{listNumbers}</li>
    </div>
  );
}
const pStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(24, 1fr)",
  gridGap: "1rem",
};
export default MapNumbers;
