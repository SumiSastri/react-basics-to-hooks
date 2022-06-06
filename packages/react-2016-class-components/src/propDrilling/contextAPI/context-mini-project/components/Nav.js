import React, { Component } from "react";

import ThemeConsumer from "../contexts/ThemeContext/ThemeContextVariables";
import AuthConsumer from "../contexts/AuthContext/AuthContextVariables";

class Nav extends Component {
  render() {
    return (
      <AuthConsumer>
        {(authContext) => (
          <ThemeConsumer>
            {(themeContext) => {
              const { isAuthenticated, toggleAuth } = authContext;
              console.log("authContext import", authContext);
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <div className="all-center">
                    <h1 className="text-primary">Mini context-API Project</h1>
                  </div>

                  <button className="btn-pink" onClick={() => toggleAuth()}>
                    {isAuthenticated
                      ? "LOGGED-IN: Click to log-out"
                      : "Click to LOG-IN, your are logged out"}
                  </button>
                </nav>
              );
            }}
          </ThemeConsumer>
        )}
      </AuthConsumer>
    );
  }
}

export default Nav;
