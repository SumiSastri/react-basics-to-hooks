import React, { Component } from "react";

export default class ReturnSomethingOrNothing extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
      loading: false,
    };
  }

  render() {
    return this.state.loggedIn && <p>You have successfully logged-in</p>;
  }
}
