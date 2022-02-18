import React, { Component } from 'react';
import { Button } from 'reactstrap';
import uuid from 'uuid';

import { FormInputField } from '../../../common-components-and-containers/forms/FormInputField';

// Simple stateful form working - how to render it in another component?

// Child as a stateful component - state local
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
	handleChange = (event) => {
		this.setState({
			title: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		// check submit handler working
		console.log(`submitting, ${this.state.id}, ${this.state.title}, ${this.state.completed}`);
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
			<div id={id}>
				<form onSubmit={this.handleSubmit}>
					<FormInputField
						label="What I need to do next:"
						className="inpt-b1m"
						datatestid="inpt-create-to-do"
						name="inpt-create-to-do"
						onChange={this.handleChange}
						placeholder="Add items here"
						type="text-area"
						title={title}
						value={title}
					/>
					<span>{title}</span>
					<span>{completed}</span>
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
