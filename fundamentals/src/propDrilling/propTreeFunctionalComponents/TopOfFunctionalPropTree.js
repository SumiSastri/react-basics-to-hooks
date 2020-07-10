import React from "react";

import Child1 from "../propTreeFunctionalComponents/Child1";
import Child2 from "../propTreeFunctionalComponents/Child2";
import Child3 from "../propTreeFunctionalComponents/Child3";

function TopOfFunctionalPropTree({ username }) {
  return (
    <div className="card">
      <h2>Top of Prop Tree - {username}Component A</h2>
      <p>
        Prop drilling demo - props manually passed down from component to
        component
      </p>
      <Child1 name="First Child with 3 nested children" />
      <Child2 duplicateForChildren="Second Child with 1 nested child and 1 duplicate child from sibling child 3" />
      <Child3 nested="Third Child with 2 nested children" />
    </div>
  );
}

export default TopOfFunctionalPropTree;
