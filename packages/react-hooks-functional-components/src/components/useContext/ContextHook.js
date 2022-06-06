import React from "react";

import ComponentC from "../useContext/ContextHookComponentF";
import {
  UserContext,
  ChannelContext,
} from "../useContext/useContextHookVariables";

function ContextHook() {
  return (
    <div>
      <UserContext.Provider value="useContextHook User1">
        <ChannelContext.Provider value="useContextHook Channel1">
          <h4>This is a demo of the useContext Hook</h4>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default ContextComponent;
