import React from "react";

import GrandChild1 from "../propTreeFunctionalComponents/GrandChild1";
import GrandChild2 from "../propTreeFunctionalComponents/GrandChild2";

function Child2({ duplicateForChildren }) {
  return (
    <div>
      <h3 className="text-success">Child-2{duplicateForChildren}</h3>
      <GrandChild1 instrument="violinist" />
      <GrandChild2>{""}There are no children props to render here</GrandChild2>
    </div>
  );
}

export default Child2;
