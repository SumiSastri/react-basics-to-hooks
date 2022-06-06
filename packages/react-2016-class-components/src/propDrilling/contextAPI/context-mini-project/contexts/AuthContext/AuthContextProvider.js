import React, { Component } from "react";

import AuthContext from "./AuthContextVariables";

export class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false,
  };
  toggleAuth = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
