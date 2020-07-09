import React, { Component } from "react";

export class FilterGitHubUsers extends Component {
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
    const filteredUsers = users
      .filter((eachUser) => eachUser.id <= 34)
      .map((filteredUsers) => (
        <div key={filteredUsers.id}>
          {filteredUsers.login}
          <img
            src={filteredUsers.avatar_url}
            className="round-img"
            style={{ width: "80px" }}
            alt="images of gitHub users"
          ></img>
        </div>
      ));
    console.log(`filtered users`, filteredUsers);
    return (
      <div className="container">
        <br></br>
        <p>
          <strong>Example 3B (3):</strong> Filtering data out involves chaining.
          First you write your filter logic and the conditions by which you wish
          to filter the data. Then you map through the filtered data and render
          this in a map method. Here we have filtered out the users who have ids
          below 34.
        </p>
        <br></br>
        <div style={gitHubUserStyles}>{filteredUsers}</div>
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

export default FilterGitHubUsers;
