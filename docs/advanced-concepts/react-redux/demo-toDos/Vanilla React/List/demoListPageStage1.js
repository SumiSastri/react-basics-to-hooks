import React from 'react';
import { Container } from 'reactstrap';

// List Stage 1: Move the render method out of home
// Create a functional component
// Import state - export this component as child and render in home
// Check render works
const ToDosList = ({ toDosArray }) => {
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
};
export default ToDosList;
