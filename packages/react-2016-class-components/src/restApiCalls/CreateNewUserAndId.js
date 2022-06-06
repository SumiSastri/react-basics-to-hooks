import React, { Component } from "react";
import axios from "axios";

export default class CreateNewUserAndId extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  handleTextInputChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: this.state.name,
    };
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((response) => {
        console.log(response);
        console.log(response.data);
      })
      .catch((error) => console.log(error.toJSON()));
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <h4>CRUD - Create, UpdateById, DeleteById</h4>
        <p>
          CREATE: axios.post(): Creates user generated data and sends it to DB
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>Add new user</label>
          <input
            type="text"
            placeholder="Add user name here"
            value={name}
            onChange={this.handleTextInputChange}
          />
          <button className="btn-dark" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
