import React from "react";

function MapObjects({ data }) {
  return (
    <div>
      <p>
        Functional child components rendering the map method in JSX with props
        passed as expressions. As a pure component it renders exactly the same
        elements with no side effects.
      </p>
      <h5 className="container-borders">
        Employee Name:{data.name} Contact details (P): {data.phone} (E):
        {data.email}
      </h5>
      <br></br>
    </div>
  );
}

export default MapObjects;
