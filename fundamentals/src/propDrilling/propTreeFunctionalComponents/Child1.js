import React from "react";

import GrandChild3 from "../propTreeFunctionalComponents/GrandChild3";
import GrandChild4 from "../propTreeFunctionalComponents/GrandChild4";
import GrandChild6 from "../propTreeFunctionalComponents/GrandChild6";

function Child1({ name }) {
  return (
    <div>
      <h2>
        Child-1
        {name}
      </h2>
      <GrandChild3 profession="doctor" />
      <GrandChild4 job="lawyer" />
      <GrandChild6 work="accountant" />
    </div>
  );
}

export default Child1;
