import React, { Component } from "react";

// import ThemeConsumer from "../contexts/ThemeContext/ThemeContextVariables";

class Header extends Component {
  render() {
    return (
      <div className="card">
        <header>
          <p>
            In this mini-project, we have used the context-API to create
            multiple HOCs. A ThemeContextProvider & AuthContextProvider and
            their respective ThemeProvider-ThemeConsumer and
            Auth-Provider-AuthConsumer components.
          </p>
          <p>
            If you click on the Login-Logout button, the Auth Provider-Consumer
            are at work. If you click the toggle between dark-light, the Theme
            Provider-Consumer are at work.
          </p>
          <p>
            The top of the tree is the Main component that nests all the
            components in the prop-tree - Nav, Header, List. The Providers wrap
            the top of the prop-tree and the Consumers only those components
            that are Consuming the Context set up. The Nav only gets the Auth &
            Theme Consumers, the list requires neither of the Consumer
            components, so the toggle now only changes the Nav and the List
            themes from light to dark.
          </p>
        </header>
      </div>
    );
  }
}

export default Header;
