import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';

import ToDosList from './ToDosList';
import CreateToDo from './toDo-forms-and-modals/CreateToDo';

// Stage 5 Changes: Now that the simple stateful form works - add function
// Method 2: You need to import the submit payload as a param of the add utility function
// State of the add function needs to be updated accepting the submit payload
// See the steps outlined here - and connect with the form page stage 2
export class ToDosHome extends Component {
	constructor(props) {
		super(props);
		// when state updates it is passed into the list component - new items will be added to list
		// the list component will be re-rendered with the new item
		this.state = {
			toDosArray: []
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

	// Step1 : add utility function to add the new toDo
	// Step2: go to render method and pass to the stateful child as a prop
	// Step 4: Returning from the stateful child, add a param which is a local variable in the function
	// This local variable in the param is the namespace to hold state that has been passed as a prop to this function
	// log and check payload has been received from stateful child
	addToDoItem = (newToDoItem) => {
		console.log(`submit payload received:`, newToDoItem);
		// if you want to add a random id instead of uuid library - newToDoItem.id = Math.random()
		// Step 5: set state to the submit payload received - create a copy of the array
		//  Add the submit payload to the copy of the array with the spread operator
		//  The new array now has all the elements of the old array and adds the submit payload as the additional element
		let displayNewToDoItem = [ ...this.state.toDosArray, newToDoItem ];
		// Step 6: update state with the copy of the array and element added
		// the display of the new element now is tagged on to the copy of the array made in the setState() method
		this.setState({ toDosArray: displayNewToDoItem });
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
		const { handleChange, handleSubmit } = this.props;

		return (
			<div>
				<Container>
					<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
						{/* Step 2: pass the add function to the stateful child as props */}
						<CreateToDo addToDoItem={this.addToDoItem} onChange={handleChange} onSubmit={handleSubmit} />
					</div>

					<ToDosList
						// pass state as props to list/ card
						toDosArray={toDosArray}
						// delete has fewer steps compared with create - passed to card via list
						deleteToDoItem={this.deleteToDoItem}
					/>
				</Container>
			</div>
		);
	}
}
export default ToDosHome;
