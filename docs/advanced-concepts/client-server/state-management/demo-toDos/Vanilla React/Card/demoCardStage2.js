import React from 'react';
import { Button, Container } from 'reactstrap';

// Card Stage 2: Redesigned to add update this card or delete to the design
// deleteToDoMethod passed from Home as a prop to List
// List passes this prop to Card in the card imported
// The function is defined in home and called as an onClick handler here - demo's prop drilling

const ToDosCard = ({ id, title, completed, deleteToDoItem }) => {
	return (
		<div key={id}>
			<p>{title}</p>
			<Container>
				<span>More to Do? {completed}</span>
				<Button color="info">Update</Button>
				<hr />
				<span>Completed? {completed}</span>
				<Button
					color="danger"
					onClick={() => {
						deleteToDoItem(id);
					}}
				>
					Delete
				</Button>
			</Container>
		</div>
	);
};
export default ToDosCard;
