import React from "react";

const UserContext = React.createContext(
  "Default value in the userContext useContextHook variables file"
);
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;
export { UserProvider, UserConsumer };
export default UserContext;

const ChannelContext = React.createContext(
  "Default value in the channelContext useContextHook variables file"
);
const ChannelProvider = ChannelContext.Provider;
const ChannelConsumer = ChannelContext.Consumer;
export { ChannelProvider, ChannelConsumer };
export default ChannelContext;
