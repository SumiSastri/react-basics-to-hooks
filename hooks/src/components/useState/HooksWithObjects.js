import React, { useState } from "react";

function HooksWithObjects() {
  let initialState = { firstName: "", lastName: "" };
  const [name, setName] = useState(initialState);

  return (
    <div>
      <h4>Using the setState Hook with Objects & Forms </h4>
      <p>
        In class components, updating state with an object merges and updates
        the object state. With Hooks the method does not merge and update the
        object state, you therefore need to use the spread operator.
      </p>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="Type first name here"
          value={name.firstName}
          onChange={(event) =>
            setName({ ...name, firstName: event.target.value })
          }
        ></input>
        <h5>You typed {name.firstName}</h5>
        <input
          type="text"
          name="lastName"
          placeholder="Type Last name here"
          value={name.lastName}
          onChange={(event) =>
            setName({ ...name, lastName: event.target.value })
          }
        ></input>
        <h5>You typed {name.lastName}</h5>
        <button className="btn" onClick={(event) => setName({ initialState })}>
          Click to clear form inputs
        </button>
      </form>
    </div>
  );
}

export default HooksWithObjects;
