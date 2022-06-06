import React, { Component } from "react";
import axios from "axios";

export default class UpdateById extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      id: 0,
    };
  }

  // UPDATE DATA - select id and data to be updated:
  handleChangeUpdateUserById = (event) => {
    this.setState({
      id: event.target.value,
      name: event.target.value,
    });
  };
  handleChangeUpdateUserName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmitUpdateUserById = (event) => {
    event.preventDefault();
    const userUpdate = {
      id: this.state.id,
      name: this.state.name,
    };
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${this.state.id}`, {
        userUpdate,
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        console.log(`res.headers`, response.headers);
      })
      .catch((error) => console.log(error.toJSON()));
  };

  render() {
    const { name, id } = this.state;
    console.log(this.state);
    return (
      <div>
        <p>UPDATE: axios.put(): Identifies by id & updates input</p>
        <form onSubmit={this.handleSubmitUpdateUserById}>
          <label>Select user Id</label>
          <input
            type="number"
            placeholder="Select user"
            value={id}
            onChange={this.handleChangeUpdateUserById}
          />
          <label>Change User Name</label>
          <input
            type="text"
            placeholder="Type Updated User Details"
            value={name}
            onChange={this.handleChangeUpdateUserName}
          />
          <button className="btn-success" type="update">
            Click to Update
          </button>
        </form>
      </div>
    );
  }
}
