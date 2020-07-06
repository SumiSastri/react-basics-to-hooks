import React, { Component } from "react";

import ComponentC from "../contextAPI/ContextComponentC";
import { UserProvider } from "../contextAPI/userContextVariables";

class ContextComponent extends Component {
  render() {
    return (
      <div>
        <UserProvider
          value="This is the prop from the user provider - User Name 1"
          r
        >
          <h4>This is a demo of the Context API</h4>
          <p>
            With the uni-directional flow of data with React, props need to be
            passed down to all the nested components. This is called prop
            drilling. To make the access of props easier the Context API has
            methods that you can use - wrapping the parent compnent in a
            provider and the child component in a consumer. The consumer method
            takes in the prop in the provider as a parameter and renders it as
            an expression in the appropriate JSX element
          </p>
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default ContextComponent;
