import React from "react";
import "../../App.css";

import HooksComponentUpdateMethod from "./lifeCycle-methods/HooksComponentUpdateMethod";
// import HooksComponentDidMount from "./lifeCycle-methods/HooksComponentDidMount";
// import HooksComponentWillUnmountChild from "./lifeCycle-methods/HookComponentWillUnmountChild";
import HooksSetAndClearIntervals from "./lifeCycle-methods/HooksSetAndClearIntervals";
import DataFetchingWithUseEffect from "./httpCalls/DataFetchingWithUseEffect";

const UseEffectHome = () => {
  return (
    <div>
      <div className='card'>
        <h2>The useEffect Hook</h2>
        <HooksComponentUpdateMethod />
        {/* <HooksComponentDidMount />
        <HooksComponentWillUnmountChild /> */}
        <HooksSetAndClearIntervals />
        <DataFetchingWithUseEffect />
      </div>
    </div>
  );
};

export default UseEffectHome;
