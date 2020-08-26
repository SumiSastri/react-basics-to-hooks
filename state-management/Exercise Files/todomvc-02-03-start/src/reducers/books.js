import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED
} from '../constants/ActionTypes'

import classicBooks from '../constants/books';

const initialState = {
  books: classicBooks,
  completedBooks: 0
}
   

export default function todos(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
