import React from "react";

const UserContext = React.createContext(
  "Default value in the userContext variables file"
);
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
