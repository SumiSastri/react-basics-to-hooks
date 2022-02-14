import ToDosCard from './ToDosCard';
import ToDosCompleted from './ToDosCompleted';

// Stage 4: Add functionality to the presentational pages
// pass methods of parent to children
// the method to delete a card imported from home page and passes on to card
// Not consumed in this - merely passed to card component - where the onclick event calls the function

const ToDosList = ({ toDosArray, deleteToDoItem }) => {
	const displayToDos = toDosArray.length ? (
		toDosArray.map((eachToDo, i) => {
			return <ToDosCard deleteToDoItem={deleteToDoItem} id={toDosArray[i].id} title={toDosArray[i].title} />;
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
