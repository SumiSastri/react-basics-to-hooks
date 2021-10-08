import React from "react";

import GrandChild2 from "./GrandChild2";
import GrandChild5 from "./GrandChild5";

function Child3({ nested }) {
  return (
    <div>
      <h3 className="text-success">Child-3{nested}</h3>
      <GrandChild2 description="I RENDER PROPS">
        Rendering children of props of GrandChild2
      </GrandChild2>
      <GrandChild5 profession="teacher" />
    </div>
  );
}

export default Child3;
