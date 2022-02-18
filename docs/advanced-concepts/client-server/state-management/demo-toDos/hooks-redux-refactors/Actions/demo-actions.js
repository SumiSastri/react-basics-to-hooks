// async action creators for http-calls

import { CREATE_TODO, DELETE_TODO } from './constants/ToDoActionTypes';

// destructured JSON object is the function body
export const createToDoItem = (item) => ({
	type: CREATE_TODO,
	payload: { item }
});
export const deleteToDoItem = (item) => ({
	type: DELETE_TODO,
	payload: { item }
});