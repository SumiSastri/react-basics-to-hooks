import React from 'react';
import { Button } from 'reactstrap';

// Stage 1: The card takes props from List
//  It renders each card with a unique id, title, and if completed prompt to delete
const ToDosCard = ({ id, title, completed }) => {
	return (
		<div key={id}>
			<p>{title}</p>
			<p>{completed}</p>
			<div>
				<Button color="danger">Delete</Button>
			</div>
		</div>
	);
};
export default ToDosCard;
