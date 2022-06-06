import React, { Component } from "react";

import ThemeContext from "../contexts/ThemeContext/ThemeContextVariables";

export class ToggleTheme extends Component {
  static contextType = ThemeContext;

  render() {
    const { toggleTheme } = this.context;
    return (
      <div>
        <button className="btn-blue" onClick={toggleTheme}>
          Click to switch between DARK & LIGHT themes
        </button>
      </div>
    );
  }
}

export default ToggleTheme;
