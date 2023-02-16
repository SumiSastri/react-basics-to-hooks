import React, { useState } from "react";

const HooksWithArrays = () => {
  let initialState = [];
  const [randomNumbers, setRandomNumbers] = useState(initialState);

  const rollDice = () => {
    // copy all the numbers then append the new value to the mapped list
    setRandomNumbers([
      ...randomNumbers,
      {
        id: randomNumbers.length,
        value: Math.floor(Math.random() * 6) + 1,
      },
    ]);
  };

  const resetDice = () => {
    setRandomNumbers(initialState);
  };

  return (
    <div>
      <h3>Mapping through an array with hooks</h3>
      <p>
        In class components, updating state with an array merges and updates the
        array state. With Hooks the method does not merge and update the array
        state, you therefore need to use the spread operator.
      </p>
      <div>
        {randomNumbers.map((randomNumber) => (
          <p key={randomNumber.id}>{randomNumber.value}</p>
        ))}
      </div>
      <button className='btn-blue' onClick={rollDice}>
        Click to roll dice
      </button>
      <button className='btn' onClick={resetDice}>
        Reset
      </button>
    </div>
  );
};

export default HooksWithArrays;
