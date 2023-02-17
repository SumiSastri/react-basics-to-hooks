import { createContext } from "react";

import ContextComponentThree from "./ContextComponentThree";

export const UserContext = createContext();
export const UserTypeContext = createContext();

const ContextComponent = () => {
  return (
    <div>
      <h4>Context Component - Parent</h4>
      <p>
        This is the Context Component which nests Component 3, which nests
        Component 2, which displays Component 1.
      </p>
      <h3>Vanilla React Context Demo</h3>
      <UserContext.Provider value='Jane Doe'>
        <UserTypeContext.Provider value='Super User'>
          <ContextComponentThree />
        </UserTypeContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default ContextComponent;
