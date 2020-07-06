import React, { Component } from "react";
import axios from "axios";

export default class GetAndPostData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
    };
  }

  handleDeleteIdChange = (event) => {
    this.setState({
      id: event.target.value,
    });
  };

  handleDeleteIdSubmit = (event) => {
    event.preventDefault();
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
      })
      .catch((error) => console.log(error.toJSON()));
  };

  render() {
    const { id } = this.state;
    return (
      <div>
        <p>DELETE: axios.delete(): Finds user Id and deletes user in DB</p>
        <form onSubmit={this.handleDeleteIdSubmit}>
          <label>Select User Id to Delete</label>
          <input
            type="number"
            placeholder="Select id to delete user"
            value={id}
            onChange={this.handleDeleteIdChange}
          />
          <button type="delete">Delete</button>
        </form>
      </div>
    );
  }
}
