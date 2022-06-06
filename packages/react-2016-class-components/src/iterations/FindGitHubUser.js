import React, { Component } from "react";

export class FindGitHubUser extends Component {
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
    const findUser = users.find((exactUser) => {
      return exactUser.login === "nitay";
    });
    console.log(findUser);

    return (
      <div className="container">
        <br></br>
        <p>
          <strong>Example 3B (2):</strong> Uses <em>array.find</em> rather than
          map method - finds a single user and displays user.
        </p>
        <br></br>
        <div style={gitHubUserStyles}>
          <div key={findUser.id}>
            {findUser.login}
            <img
              src={findUser.avatar_url}
              className="round-img"
              style={{ width: "80px" }}
              alt="images of gitHub users"
            ></img>
          </div>
        </div>
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
export default FindGitHubUser;
