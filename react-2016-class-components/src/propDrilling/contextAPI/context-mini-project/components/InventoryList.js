import React, { Component } from "react";

import ThemeContext from "../contexts/ThemeContext/ThemeContextVariables";

class InventoryList extends Component {
  static contextType = ThemeContext;

  render() {
    console.log("themeContext import", this.context);
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div className="card" style={{ color: theme.text, background: theme.bg }}>
        <ul>
          <li style={{ background: theme.ui }}>Microwave</li>
          <li style={{ background: theme.ui }}>Fridge</li>
          <li style={{ background: theme.ui }}>Freezer</li>
          <li style={{ background: theme.ui }}>Hoover</li>
          <li style={{ background: theme.ui }}>Washer-Dryer</li>
          <li style={{ background: theme.ui }}>Freestanding Hob-Grill-Oven</li>
        </ul>
      </div>
    );
  }
}

export default InventoryList;
