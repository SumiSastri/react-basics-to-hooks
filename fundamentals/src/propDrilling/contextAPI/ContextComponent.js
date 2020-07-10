import React, { Component } from "react";

import ComponentC from "../contextAPI/ContextComponentC";
import { UserProvider } from "../contextAPI/userContextVariables";

class ContextComponent extends Component {
  render() {
    return (
      <div className="card">
        <UserProvider
          value="This is the prop from the user provider - User Name 1"
          r
        >
          <h4>The Context API: Demo</h4>
          <p>
            The Context API is yet another way of dealing with the challenge of
            prop-drilling.
          </p>{" "}
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default ContextComponent;
