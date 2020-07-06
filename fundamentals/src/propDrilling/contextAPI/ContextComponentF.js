import React, { Component } from "react";
import { UserConsumer } from "../contextAPI/userContextVariables";

export class ContextComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return (
            <div>
              <h4>
                Component F can render props from Component C with Context API:
                {""}
              </h4>
              <p>{username}</p>
              <p>
                This is the recommended way as you can consume several contexts
                with this method.
              </p>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default ContextComponentF;
