import React from "react";

import "../../App.css";

import { UserContext, UserTypeContext } from "./UseContextHome";
import UseContextHookComponent from "./UseContextHookComponent";
import RefactorContextComponentOne from "./RefactorContextComponentOne";

const ContextComponentOne = () => {
  return (
    <div>
      <h4>Context Component 1</h4>
      <p>
        This component needs the data from the home page it imports the context
        and consumes it. Data then is transfered directly from the parent to the
        child at the bottom of the tree without manually drilling through the
        components and passing props in the components three and two.
      </p>
      <UserContext.Consumer>
        {(userName) => {
          return (
            <UserTypeContext.Consumer>
              {(userType) => {
                return (
                  <div>
                    User Name is displayed here as
                    <p className='badge'>{userName}</p>& UserType as
                    <p className='badge'>{userType}</p>
                    Using multiple contexts makes the nested code unreadable
                  </div>
                );
              }}
            </UserTypeContext.Consumer>
          );
        }}
      </UserContext.Consumer>
      <RefactorContextComponentOne />
      <UseContextHookComponent />
    </div>
  );
};

export default ContextComponentOne;
