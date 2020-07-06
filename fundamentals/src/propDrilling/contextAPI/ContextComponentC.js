import React, { Component } from "react";

import ComponentE from "../contextAPI/ContextComponentE";

export class ContextComponentC extends Component {
  render() {
    return (
      <div>
        <h4>Component C nests Component E</h4>
        <p>
          There is no need to pass the prop through every intermediate nested
          component. This is the main advantage of the provider and consumer
          methods. Only the child prop that needs the prop consumes it.
        </p>
        <ComponentE />
      </div>
    );
  }
}

export default ContextComponentC;
