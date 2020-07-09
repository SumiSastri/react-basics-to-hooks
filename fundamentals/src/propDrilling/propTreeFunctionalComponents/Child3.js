import React from "react";

import GrandChild2 from "../propTreeFunctionalComponents/GrandChild2";
import GrandChild5 from "../propTreeFunctionalComponents/GrandChild5";

function Child3({ nested }) {
  return (
    <div>
      <h2>Child-3{nested}</h2>
      <GrandChild2 description="I am 5m tall">
        <p>Rendering children of props of GrandChild2</p>
      </GrandChild2>
      <GrandChild5 height="I am 2m tall" />
    </div>
  );
}

export default Child3;
