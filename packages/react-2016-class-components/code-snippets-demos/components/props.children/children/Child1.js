import React from "react";

import GrandChild3 from "./GrandChild3";
import GrandChild4 from "./GrandChild4";
import GrandChild6 from "./GrandChild6";

function Child1({ name }) {
  return (
    <div>
      <h3 className="text-success">
        Child-1
        {name}
      </h3>
      <GrandChild3 profession="doctor" />
      <GrandChild4 job="lawyer" />
      <GrandChild6 work="accountant" />
    </div>
  );
}

export default Child1;
