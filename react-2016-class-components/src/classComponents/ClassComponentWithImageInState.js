import React, { Component } from "react";

export class ClassComponentWithImageInState extends Component {
  // NOT ACTUALLY REQUIRED
  //   constructor(props) {
  //     super(props);
  // this.

  state = {
    login: "wycats",
    id: 4,
    avatar_url: "https://avatars0.githubusercontent.com/u/4?v=4",
    url: "https://api.github.com/users/wycats",
    html_url: "https://github.com/wycats",
  };
  //   }

  render() {
    const { avatar_url, id, login } = this.state;
    return (
      <div className="card text-center">
        <p>
          In <strong>Example 2B</strong> state contains an image of GitHub user{" "}
          {""}
          {login}, with the id: {id}. These are rendered in this component
          without the requirement of the constructor and super methods.
        </p>
        <div className="container">
          <img
            src={avatar_url}
            className="round-img"
            style={{ width: "80px" }}
            alt="wycats"
          ></img>
        </div>
      </div>
    );
  }
}

export default ClassComponentWithImageInState;
