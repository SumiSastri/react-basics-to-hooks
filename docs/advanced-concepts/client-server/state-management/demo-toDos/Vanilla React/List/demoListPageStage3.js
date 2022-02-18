import React from 'react';
import { Container } from 'reactstrap';

import ToDosCard from './ToDosCard';
import ToDosCompleted from './ToDosCompleted';

// Stage 3: modularise further by removing the else block
// Create/ design a separate component that can be imported

const ToDosList = ({ toDosArray }) => {
	const displayToDos = toDosArray.length ? (
		toDosArray.map((eachToDo, i) => {
			return <ToDosCard id={toDosArray[i].id} title={toDosArray[i].title} />;
		})
	) : (
		<ToDosCompleted />
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
