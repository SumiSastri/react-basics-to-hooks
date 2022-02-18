import React, { Component } from 'react';
import axios from 'axios';
import { Container, Button } from 'reactstrap';

// Stage 1:  - fetch items with an api-call and render them in a list
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
		const { toDosArray } = this.state;
		// react renders strings, numbers and arrays not objects and booleans
		// to display the array you need to use an array method and then display
		// set-state to the new array with a new variable
		const displayToDos = toDosArray.length ? (
			toDosArray.map((eachToDo) => {
				return (
					<div key={eachToDo.id}>
						<p>{eachToDo.title}</p>
					</div>
				);
			})
		) : (
			<p>Nothing left to organise!Booyaka :-)</p>
		);

		return (
			<div>
				<Container />
				<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
					<h1>My Hip-Hop Organiser</h1>
					{displayToDos}
				</div>
				<Container />
			</div>
		);
	}
}
export default ToDosHome;
