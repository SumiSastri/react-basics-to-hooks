import React from "react";
import {
  UserConsumer,
  ChannelConsumer,
} from "../contextAPI/userContextVariables";

function ContextHookComponentF() {
  return (
    <UserConsumer>
      {(username) => {
        return (
          <ChannelConsumer>
            {(channelname) => {
              return (
                <div>
                  <h4>
                    Component F can render props from Component C with Context
                    API:
                    {""}
                  </h4>
                  <p>
                    {username}
                    {channelname}
                  </p>
                </div>
              );
            }}
          </ChannelConsumer>
        );
      }}
    </UserConsumer>
  );
}

export default ContextHookComponentF;
