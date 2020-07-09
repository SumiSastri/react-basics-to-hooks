import React from "react";

import IncrementOnClickWrapper from "../higherOrderComponents/IncrementOnClickWrapper";
import IncrementMouseOverWrapper from "../higherOrderComponents/IncrementMouseOverWrapper";
import RenderPropsComponentTwo from "../renderProps/RenderPropsComponentTwo";
import ContextComponent from "../contextAPI/ContextComponent";
import TopOfFunctionalPropTree from "../propTreeFunctionalComponents/TopOfFunctionalPropTree";

export default function HigherOrderComponents() {
  return (
    <div>
      <TopOfFunctionalPropTree username="user1" />
      <h4>HOC's: Higher Order Components</h4>
      <IncrementOnClickWrapper />
      <IncrementMouseOverWrapper />
      <RenderPropsComponentTwo />
      <ContextComponent />
    </div>
  );
}
