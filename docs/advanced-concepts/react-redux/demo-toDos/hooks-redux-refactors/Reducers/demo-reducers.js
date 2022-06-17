import { CREATE_TODO, DELETE_TODO } from '../toDos-actions/constants/ToDoActionTypes';

// initial state is a 'lifted state' lifted from the component 
// it will be lifted once again out of here to the root reducer in the section then lifted to the root reducer
// only the root reducer interacts with the store

// store will run the initial state first then look for changes
export const todosReducer = (state = [], action) => {
	const { type, payload } = action;
	// console.log('todosReducer', action);
	switch (type) {
		case CREATE_TODO: {
			// return the text property in payload
			const { item } = payload;
			const newToDoItem = {
				item,
				isCompleted: false
			};
			// concat does not mutate state
			return [ ...state, state.concat(newToDoItem) ];
		}
		case DELETE_TODO: {
			const { item } = payload;
			// find the exact match in the array and remove from payload going to the store
			return [ ...state, state.filter((todo) => todo.item !== item) ];
		}
		default:
			return state;
	}
};

