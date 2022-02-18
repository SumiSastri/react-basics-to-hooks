import React, { Component } from 'react';
import axios from 'axios';
import { Container, Button } from 'reactstrap';

// Stage 2: Modularise this stateful component
// Create and import a list component - pass props to child
import ToDosList from './ToDosList';

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

	getToDos = () => {
		return (
			axios
				.get(`http://jsonplaceholder.typicode.com/todos`)
				.then((response) => {
					console.log(response);
					// this.setState({ toDosArray: response.data.slice(0, 2) });
					this.setState({});
				})
				// check loading - uncomment the code and comment out the set-state above
				.catch((err) => this.setState({ errors: err.response.data.errors }))
		);
	};

	render() {
		// shift render logic into a separate presentational component
		// import the list component created - link parent component and props to state
		const { toDosArray } = this.state;
		return (
			<div>
				<Container>
					{/* PASS STATE INTO PROPS  */}
					<ToDosList toDosArray={toDosArray} />
				</Container>
			</div>
		);
	}
}
export default ToDosHome;
