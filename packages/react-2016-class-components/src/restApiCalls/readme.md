## How do REST API calls work in React?

    **HTTP LIBRARIES**
    Use a HTTP-library as React has no concept of back-end data. Components merely render state and props.

    To use Axios as a library `npm install axios`.
    Documentation [https://www.npmjs.com/package/axios#response-schema]
    More reading log-rocket blog:
    [https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/]
    A good cheat sheet [https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index]

The Axios library is a HTTP-runner that works with React/ JavaScript and has the REST-API methods

This is how the component should look at the end - the console logs show you all the available data that you can see.

```
import React, { Component } from "react";
import axios from "axios";

export default class GetAndPostData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [],
      name: "",
    };
  }
<!--
REACT METHOD - NEST Axios methods here

  componentDidMount() {

      this.setState({ persons: response.data });

  }

RETRIEVE DATA - request is the url, response is the call back promise
  axios.get (request, response){

  } -->
  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        <!-- ALL THE AVAILABLE LOGS FROM THE RESPONSE
        console.log(`res`, response);
        console.log(`res.status`, response.status);
        console.log(`res.statusText`, response.statusText);
        console.log(`res.headers`, response.headers);
        console.log(`res.config`, response.config);
        -->
        this.setState({ persons: response.data });
      })
      <!-- PROVIDES BETTER INFORMATION ON THE ERROR -->
      .catch((error) => console.log(error.toJSON()));
  }

  <!-- ADD DATA EVENT HANDLERS -->
  handleTextInputChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
<!-- THE SUBMIT ACTION SENDS THE DATA BACK TO THE SERVER -->
  handleSubmit = (event) => {
    event.preventDefault();
    <!--YOU CAN TEST THIS IS WORKING BEFORE SENDING TO SERVER alert(`${this.state.name}`); -->
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
        <p>See data calls by opening Google Developer Tools Console</p>
        <div>
          <p>axios.get() retrieves data from DB</p>
          <ul>
            <li>{personList}</li>
          </ul>
        </div>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

```

Update and Delete require you to pass the user-id to be access the data and successfully update or delete. The update or put method is often confused with the post method but they are very different.

**Post versus Put**

- Post creates a brand new record
- Put updates an already existing record
- Post creates a new id for the record
- Put accesses an existing id for the record and updates incorrect details
- Post inserts new data into the DB
- Put replaces an existing peice of data with new information

This is how a put request should look like

```
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

  <!-- UPDATE DATA - select id and data to be updated: -->
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
        <!--
        USEFUL FOR DEBUGGING
        console.log(response);
        console.log(response.data);
        console.log(`res.headers`, response.headers);
        -->
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
          <button type="update">Click to Update</button>
        </form>
      </div>
    );
  }
}
```

Delete is a method to be used advisedly, either for GDPR purposes when a user wants data permanently deleted or if data is truly outdated. This is an irreversible action. APIs like the `jsonPlaceholder` allow you to test these end-points without actually updating or deleting data. You will get a 200 response if the call works but the data is not actually changed. With delete unlike update, no data is being inserted back into the database so the creation of a user is not required. The component should look like this.

```
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
```

Code can be refactored by putting all the calls into separate components and importing them into the component that fetches the data.
