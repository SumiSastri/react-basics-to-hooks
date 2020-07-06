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
    const { avatar_url } = this.state;
    return (
      <div className="card text-center">
        <p>
          This is also a class component with a string in state - this string
          contains a URL to GitHub users API and renders an image.
        </p>
        <img
          src={avatar_url}
          className="round-img"
          style={{ width: "80px" }}
          alt="wycats"
        ></img>
      </div>
    );
  }
}

export default ClassComponentWithImageInState;
