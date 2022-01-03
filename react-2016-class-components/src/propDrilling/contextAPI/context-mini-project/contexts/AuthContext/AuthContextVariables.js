import React from "react";

const AuthContext = React.createContext(
  "Default value in the userContext variables file"
);
const AuthProvider = AuthContext.Provider;
const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
export default AuthContext;
// Note the name of the variables and the name of the class-component should be different
