import React, { useState } from "react";

function HooksWithArrays() {
  let initialState = [];
  const [randomNumbers, setRandomNumbers] = useState(initialState);

  const rollDice = () => {
    setRandomNumbers([
      ...randomNumbers,
      {
        id: randomNumbers.length,
        value: Math.floor(Math.random() * 6) + 1,
      },
    ]);
  };

  return (
    <div>
      <h4>Using the setState Hook Arrays, using the map method </h4>
      <div>
        {randomNumbers.map((randomNumber) => (
          <p key={randomNumber.id}>{randomNumber.value}</p>
        ))}
      </div>
      <button className="btn" onClick={rollDice}>
        Click to roll dice
      </button>
    </div>
  );
}

export default HooksWithArrays;
