import React, { Component } from 'react';
import { Button } from 'reactstrap';
import uuid from 'uuid';

import { FormInputField } from '../../../common-components-and-containers/forms/FormInputField';

// Simple stateful form working - forms capture new data so preferable for them to be stateful

// Child as a stateful component - state local
// this single new to to Item on submit should be pushed into the array in the parent - Home
class CreateToDo extends Component {
	state = {
		id: uuid(),
		title: '',
		completed: false
	};
	// first render
	initialState = this.state;

	// second render on update - only the title is updated by user
	// id and completed remain default state so not added
	// refactor - change name to match key of state object
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		// check submit handler working - this pushes the data to the console but not the Home parent array
		console.log(`submit payload:, ${this.state.id}, ${this.state.title}, ${this.state.completed}`);
		// Step 3: Call the addItem function in stateful child form submit handler
		// It is a prop from stateful parent - so this.props as bound to the stateful parent
		// the submit payload: is the state of this stateful child - pass it as a param to be consumed by parent -
		// Step 4: go back to stateful parent and check if param received
		this.props.addToDoItem(this.state);
		// set state back to initial state after submit to clear fields
		this.clearFormInputs();
	};

	clearFormInputs = () => {
		this.setState(this.initialState);
	};

	render() {
		// second render after change handler
		const { id, title, completed } = this.state;
		return (
			<div name="id" id={id}>
				<form onSubmit={this.handleSubmit}>
					<FormInputField
						label="What I need to do next:"
						className="inpt-b1m"
						datatestid="inpt-create-to-do"
						name="title"
						onChange={this.handleChange}
						placeholder="Add items here"
						type="text-area"
						value={title}
					/>
					<span name="title">{title}</span>
					<span name="completed">{completed}</span>
					<br />
					<Button color="info" onSubmit={this.handleSubmit}>
						Create & Submit
					</Button>
				</form>
			</div>
		);
	}
}

export default CreateToDo;
