import React, { Component } from "react";

export class MapGitHubUsers extends Component {
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
    const mapUsers = users.map((eachUser) => {
      return (
        <div key={eachUser.id}>
          {eachUser.login}
          <img
            src={eachUser.avatar_url}
            className="round-img"
            style={{ width: "80px" }}
            alt="images of gitHub users"
          ></img>
        </div>
      );
    });
    console.log(`mapUsers ${mapUsers}`);
    return (
      <div className="container">
        <br></br>
        <p>
          <strong>Example 3B (1):</strong> The same principles are used to map
          this data from an object which then renders nested JSX elements and
          applies in component styling that is assigned to a styling variable.
        </p>
        <br></br>
        <div style={gitHubUserStyles}>{mapUsers}</div>
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
export default MapGitHubUsers;
