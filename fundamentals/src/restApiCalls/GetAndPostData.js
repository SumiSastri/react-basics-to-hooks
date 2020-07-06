import React, { Component } from "react";
import axios from "axios";

import CreateNewUserAndId from "../restApiCalls/CreateNewUserAndId";
import UpdateById from "../restApiCalls/UpdateById";
import DeleteById from "../restApiCalls/DeleteById";

export default class GetAndPostData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        console.log(response);
        this.setState({ persons: response.data });
      })
      .catch((error) => console.log(error.toJSON()));
  }

  render() {
    const personList = this.state.persons.map((person) => (
      <ul key={person.id}>
        <li>
          ({person.id}) : {""}
          {person.name}
        </li>
      </ul>
    ));
    return (
      <div>
        <h4>API calls with with the Axios (HTTP) library</h4>
        <div>
          <p>axios.get() retrieves data from DB</p>
          <p>
            axios.post() displays retrieved data with an iteration over the
            retrieved data from the axios.get() method. By mapping over the data
            and using the id as a key to display data in a JSX element. The data
            below has been mapped into an unordered list.
          </p>
          <ul>
            <li>{personList}</li>
          </ul>
        </div>
        <p>NOTE: See data calls by opening Google Developer Tools Console</p>
        <CreateNewUserAndId />
        <UpdateById />
        <DeleteById />
      </div>
    );
  }
}
