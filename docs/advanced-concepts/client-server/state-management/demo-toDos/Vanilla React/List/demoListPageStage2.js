import React from 'react';
import { Container } from 'reactstrap';

// List Stage 2: Create a card component and make it a child of List
// import the card component and pass down state to share with the child component

import ToDosCard from './ToDosCard';

const ToDosList = ({ toDosArray }) => {
	const displayToDos = toDosArray.length ? (
		toDosArray.map((eachToDo, i) => {
			return <ToDosCard id={toDosArray[i].id} title={toDosArray[i].title} />;
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
