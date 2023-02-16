import React, { useState } from "react";

const HooksWithObjects = () => {
  let initialState = { firstName: "", lastName: "" };
  const [name, setName] = useState(initialState);

  return (
    <div>
      <h3>State as an object - setting state with Hooks</h3>
      <p>
        Like arrays updating state with an object is not merged and updated you
        therefore need to use the spread operator.
      </p>

      <form>
        <input
          type='text'
          name='firstName'
          placeholder='Type first name here'
          value={name.firstName}
          // copy all key value pairs in ...name then overwrite the firstName key
          onChange={(event) =>
            setName({ ...name, firstName: event.target.value })
          }
        />
        <h4>You typed</h4>
        <h5>{name.firstName}</h5>
        <input
          type='text'
          name='lastName'
          placeholder='Type Last name here'
          value={name.lastName}
          onChange={(event) =>
            setName({ ...name, lastName: event.target.value })
          }
        />
        <h4>You typed</h4>
        <h5>{name.lastName}</h5>
        <button className='btn' onClick={() => setName({ initialState })}>
          Click to clear form inputs
        </button>
      </form>
    </div>
  );
};

export default HooksWithObjects;
