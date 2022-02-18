import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';

import ToDosList from './ToDosList';

// Stage 3: Changing of the state-tree/ component tree structures
// The list component now imports the card component
// The Card is a child of list
// List is a child of Home - delete the item via its id from the List component
// The method delete from parent now can be passed as props to child/ grandchild
export class ToDosHome extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toDosArray: []
		};
	}
	initialState = this.state;

	componentDidMount() {
		this.getToDos();
	}

	// all the front-end functions need to be written in the parent component
	// they are written here as they need to directly interact with initial state
	// initial state renders and is updated by these functions
	// the functions then can be passed as props to child components in this component tree(section)
	// This utility method is passed to the List component imported, list passes it to card imported
	// this functions final destination is the card where it is consumed
	deleteToDoItem = (id) => {
		console.log(id);
		// assign state to a new array called removeToDo - filter through
		// remove those where the id does not match
		const removeToDo = this.state.toDosArray.filter((eachToDo) => {
			return eachToDo.id !== id;
		});
		// set state to the new array - as they are not the same name key and value defined
		// old array is now the value of the new array above
		this.setState({ toDosArray: removeToDo });
	};

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

	render() {
		const { toDosArray } = this.state;
		return (
			<div>
				<Container>
					<ToDosList toDosArray={toDosArray} deleteToDoItem={this.deleteToDoItem} />
				</Container>
			</div>
		);
	}
}
export default ToDosHome;
