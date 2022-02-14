import React from 'react';
import { Spinner, Button } from 'reactstrap';

// Stage 1 creates the loading page and sets up the button to accept a click event
//  the click event will redirect the page back to the add item page
function ToDosCompleted() {
	return (
		<div className="p-3 bg-warning my-2 rounded bg-docs-transparent-grid">
			<Spinner color="danger" style={{ width: '3rem', height: '3rem' }} type="grow" />
			<h2>All done - bookyaka!</h2>
			<Button color="warning">Add more stuff to get done</Button>
		</div>
	);
}

export default ToDosCompleted;
