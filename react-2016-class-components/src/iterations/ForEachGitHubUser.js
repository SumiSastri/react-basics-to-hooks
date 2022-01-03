import React, { Component } from "react";

export class ForEachGitHubUser extends Component {
  state = {
    users: [
      {
        login: "wycats",
        id: 4,
        avatar_url: "https://avatars0.githubusercontent.com/u/4?v=4",
        html_url: "https://github.com/wycats",
      },
      {
        login: "mojodna",
        id: 45,
        avatar_url: "https://avatars2.githubusercontent.com/u/45?v=4",
        html_url: "https://github.com/mojodna",
      },
      {
        login: "nitay",
        id: 34,
        avatar_url: "https://avatars2.githubusercontent.com/u/34?v=4",
        html_url: "https://github.com/nitay",
      },
      {
        login: "bmizerany",
        id: 46,
        avatar_url: "https://avatars2.githubusercontent.com/u/46?v=4",
        html_url: "https://github.com/bmizerany",
      },
    ],
  };

  render() {
    const users = this.state.users;
    const displayUsers = (user) => {
      return (
        <div key={user.id}>
          {user.login}
          <img
            src={user.avatar_url}
            className="round-img"
            style={{ width: "80px" }}
            alt="images of gitHub users"
          ></img>
        </div>
      );
    };
    users.forEach(displayUsers);
    console.log(`displayUsers`, users);

    return (
      <div className="container">
        <br></br>
        <p>
          Example 3B 2: Uses <em>array.forEach</em> has side-effects better to
          use map - the error in the console has been left there intentionally
          to see the kind of error the method throws. This can be corrected in
          the code-block, but has not been to demo the challenge with the
          method.
        </p>
        <br></br>
        <div style={gitHubUserStyles}>{displayUsers}</div>
      </div>
    );
  }
}
const gitHubUserStyles = {
  width: "80px",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "1rem",
};
export default ForEachGitHubUser;
