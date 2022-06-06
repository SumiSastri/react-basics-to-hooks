import React, { Component } from "react";

import ComponentF from "./ContextComponentF";
import UserContext from "./userContextVariables";

export class ContextComponentE extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        <h4>Component E nests component F</h4>
        <p>
          Another way to pass props is by using the contextType property. This
          is passed just above the export default of the component or as a
          static type before the render method. Both options work. This works
          only with class components. Only one context can be consumed with this
          method.
        </p>
        <p className="text-primary">
          The context is rendered here as <strong>{this.context}</strong>
        </p>
        <ComponentF />
      </div>
    );
  }
}

// ContextComponentE.contextType = UserContext;
export default ContextComponentE;
