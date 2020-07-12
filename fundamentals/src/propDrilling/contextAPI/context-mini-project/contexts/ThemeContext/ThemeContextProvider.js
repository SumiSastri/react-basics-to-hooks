import React, { Component } from "react";

import { ThemeProvider } from "./ThemeContextVariables";

export class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { text: "#555", ui: "#ddd", bg: "#eee" },
    dark: { text: "#ddd", ui: "#333", bg: "#555" },
  };
  toggleTheme = () => {
    this.setState((prevState, props) => {
      return { isLightTheme: !prevState.isLightTheme };
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <ThemeProvider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
          {this.props.children}
        </ThemeProvider>
      </div>
    );
  }
}

export default ThemeContextProvider;
