import { useContext } from "react";

import "../../App.css";

import { UserContext, UserTypeContext } from "./ContextVariables";

const UseContextHookComponent = () => {
  const userName = useContext(UserContext);
  const userType = useContext(UserTypeContext);
  return (
    <div>
      <h3>useContext Hook Demo</h3>
      Component 1 now nests the useContextHook Component.
      <p>
        Data still flows from the parent Context Component the code is simpler
        and cleaner
      </p>
      <p className='text-primary'>{userName}</p>& UserType as
      <p className='text-primary'>{userType}</p>
    </div>
  );
};

export default UseContextHookComponent;
