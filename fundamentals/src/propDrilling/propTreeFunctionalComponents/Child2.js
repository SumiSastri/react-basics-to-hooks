import React from "react";

import GrandChild1 from "../propTreeFunctionalComponents/GrandChild1";
import GrandChild2 from "../propTreeFunctionalComponents/GrandChild2";

function Child2({ duplicateForChildren }) {
  return (
    <div>
      <h2>Child-2{duplicateForChildren}</h2>
      <GrandChild1 instrument="I play the violin" />
      <GrandChild2>
        <div>
          <p>There are no children props to render here</p>
        </div>
      </GrandChild2>
    </div>
  );
}

export default Child2;
