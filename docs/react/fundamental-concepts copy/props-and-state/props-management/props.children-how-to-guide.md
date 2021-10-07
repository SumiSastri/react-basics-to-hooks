## HOW TO USE THE PROPS.CHILDREN METHOD WITH FUNCTIONAL COMPONENTS

**Step1**
Create the child component
**Step2**
Import the child component into 2 different parent components
**Step3**
Create the properties for each of the instances of the child components in each of the parent components
**Step4**
Pass named properties from the parent components to the child and use ```props.children``` to render - this is for nested components
**Step5**
Destructure the child properties in the child component with a comma or spread operator and use the children key word.

**Step1 Create Child component**

**Step4 & 5 Pass named properties from the parent and render if required or just pass children destructured and render children as an expression**

```
import React from "react";

function GrandChild2({ description, children }) {
  return (
    <div>
      <h3>I am GrandChild2{description}</h3>
      <p>I want my children to be rendered{children}</p>
    </div>
  );
}

export default GrandChild2;
```

**Step2 Two Parents for the same child**

PARENT ONE **Step3 Create properties for GrandChild2 in enclosing div tags they will not be rendered till the children prop is passed from parent to child**

```
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
```

PARENT TWO **Step3 Create properties for GrandChild2 in enclosing div tags they will not be rendered till the children prop is passed from parent to child**

```
import React from "react";

import GrandChild2 from "../propTreeFunctionalComponents/GrandChild2";
import GrandChild5 from "../propTreeFunctionalComponents/GrandChild5";

function Child3({ nested }) {
  return (
    <div>
      <h2>Child-3{nested}</h2>
      <GrandChild2 description="I am 5m tall">
        <div>
          <p>Rendering children of props of GrandChild2</p>
        </div>
      </GrandChild2>
      <GrandChild5 height="I am 2m tall" />
    </div>
  );
}

export default Child3;
```