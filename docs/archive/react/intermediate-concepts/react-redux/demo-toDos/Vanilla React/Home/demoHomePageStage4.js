import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';
import uuid from 'uuid';

import ToDosList from './ToDosList';
// Stage 4 Changes: Now that delete successful - create a new to item and push to the toDosArray
// Method 2: Import the form as a stateful child
// Check the handle change works first
// Then check handle submit works - ie written in the stateful child and imported to stateful parent as props
import CreateToDo from './toDo-forms-and-modals/CreateToDo';

export class ToDosHome extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toDosArray: [],
			toDoItem: {
				id: uuid(),
				title: '',
				completed: false
			},
			error: null
		};
	}
	initialState = this.state;

	componentDidMount() {
		this.getToDos();
	}

	getToDos = () => {
		return axios
			.get(`http://jsonplaceholder.typicode.com/todos`)
			.then((response) => {
				console.log(response);
				this.setState({ toDosArray: response.data.slice(0, 2) });
				// this.setState({});
				// do not remove - uncomment to check else block (loading/ not-found/ completed)
			})
			.catch((err) => this.setState({ errors: err.response.data.errors }));
	};

	// required by card passed via list
	deleteToDoItem = (id) => {
		// console.log(id); do not remove - checks id captured for debugging
		const removeToDo = this.state.toDosArray.filter((eachToDo) => {
			return eachToDo.id !== id;
		});
		this.setState({ toDosArray: removeToDo });
	};

	render() {
		const { toDosArray } = this.state;
		// state received from stateful child as props
		const { toDoItem, handleChange, handleSubmit } = this.props;

		return (
			<div>
				<Container>
					<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
						<CreateToDo
							toDoItem={toDoItem}
							// stateful child passes methods to stateful parent
							onChange={handleChange}
							onSubmit={handleSubmit}
						/>
					</div>
					<ToDosList
						// pass state as props to list/ card
						toDosArray={toDosArray}
						toDoItem={toDoItem}
						// delete has fewer steps compared with create - passed to card via list
						deleteToDoItem={this.deleteToDoItem}
					/>
				</Container>
			</div>
		);
	}
}
export default ToDosHome;
