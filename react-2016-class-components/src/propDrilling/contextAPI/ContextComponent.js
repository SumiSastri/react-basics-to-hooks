import React, { Component } from "react";

import ComponentC from "./ContextComponentC";
import { UserProvider } from "./userContextVariables";

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
            prop-drilling. This mini-project demonstrates in a practical way how
            component nesting and prop-drilling challenges are met and dealt
            with. The demo below is from the Context API documentation - this
            demo is a little confusing, but the mini-project and the README
            documentation provide a better understanding of the practical
            utilisation of the Context API./
          </p>{" "}
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default ContextComponent;
