import React, { useState, useEffect } from "react";

const HooksComponentUpdateMethod = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Demo 2: conditionally render by adding the dependency of count in array
  useEffect(() => {
    console.log(`updating useEffect1`);
    document.title = `Times title clicked: ${count}`;
    console.log(`updating useEffect2`);
  }, [count]);

  return (
    <div>
      <h3>Demo 1 - Counter in document title - creating a side effect</h3>
      <p>
        useEffect runs with every render - open google console and watch the
        document tab.
      </p>
      <button className='btn' onClick={() => setCount(count + 1)}>
        Click {count} times
      </button>
      <h3>Demo 2: Adding state or props dependencies</h3>
      <p>
        To ensure the counter and input below does not render with every
        function call the dependency array must contain either state or props as
        useEffect runs with every render
      </p>
      <input
        type='text'
        placeholder='type text to conditionally render either the counter click or this input text'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
};

export default HooksComponentUpdateMethod;
