import React from "react";
// create and consume multiple consumers - refactor to make code more readable
import { UserConsumer, UserTypeConsumer } from "./ContextVariables";

const RefactorContextComponentOne = () => {
  return (
    <UserConsumer>
      {(userName) => {
        return (
          <UserTypeConsumer>
            {(userType) => {
              return (
                <div>
                  <h4>Component 1 - refactored</h4>
                  <p>
                    The refactor cleans up the code to use context variables
                  </p>
                  <p className='badge'>{userName}</p>& UserType as
                  <p className='badge'>{userType}</p>
                </div>
              );
            }}
          </UserTypeConsumer>
        );
      }}
    </UserConsumer>
  );
};

export default RefactorContextComponentOne;
