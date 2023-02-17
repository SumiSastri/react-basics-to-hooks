import { createContext } from "react";

export const UserContext = createContext("John Doe");
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;
export { UserProvider, UserConsumer };

export const UserTypeContext = createContext("Admin");
const UserTypeProvider = UserTypeContext.Provider;
const UserTypeConsumer = UserTypeContext.Consumer;
export { UserTypeProvider, UserTypeConsumer };
