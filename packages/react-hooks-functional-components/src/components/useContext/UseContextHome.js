import { createContext } from "react";

import ContextComponent from "./ContextComponent";

export const UserContext = createContext();
export const UserTypeContext = createContext();

const UseContextHome = () => {
  return (
    <div>
      <h2>useContext Hook</h2>
      <ContextComponent />
    </div>
  );
};

export default UseContextHome;
