import React, { useState, useEffect } from "react";

function HooksComponentUpdateMethod() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`updating useEffect1`);
    document.title = `Times title clicked: ${count}`;
    console.log(`updating useEffect2`);
  }, [count]);

  return (
    <div>
      <h4>
        Using the useEffect Hook to update a component rendering and eliminate
        side effects
      </h4>
      <input
        type="text"
        placeholder="type text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click {count} times
      </button>
    </div>
  );
}

export default HooksComponentUpdateMethod;
