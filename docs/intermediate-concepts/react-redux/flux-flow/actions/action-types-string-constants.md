The purpose of this document is to provide a brief overview of what action-type-constants are and why they are used over normal string-literals/ primitive string-types.

**What are string constants?**

String constants are strictly typed variables. They are written in SNAKE_CASE and always capitalised. String constants can be serialised and as they are strictly typed, each constant has to be unique. They are eaisly identifiable in a code base and result in less run-time/ compile-time errors.

**What are action-types?**

Action-types are the string constant that hold the information of the action. 

eg: of use
```
export const GET_MUSIC_ITEMS = 'GET_MUSIC_ITEMS';
export const ADD_MUSIC_ITEM = 'ADD_MUSIC_ITEM';
export const EDIT_UPDATE_MUSIC_ITEM = 'EDIT_UPDATE_MUSIC_ITEM';
export const DELETE_MUSIC_ITEM = 'DELETE_MUSIC_ITEM';
export const MUSIC_ITEMS_LOADING = 'MUSIC_ITEMS_LOADING';
```

These are then imported by the action utility functions and the reducers and then passed to the store to be updated with the new action payload described by the action utility functions (action-creators).

While these are the basic types - you can add string constants to the types depending on how you want to display the data you have fetched from the back-end and what you want the user to do with data sent from the front-end to the back-end.

eg:
```
export const FILTER_MUSIC_ITEMS = 'FILTER_MUSIC_ITEMS';
export const SEARCH_MUSIC_ITEMS = 'SEARCH_MUSIC_ITEMS';
export const SUBMIT_SAVE_MUSIC_ITEMS = 'SUBMIT_SAVE_MUSIC_ITEMS';
```

There is a second way to define types

// Second method to write a string const is to export all constants in the module as a single object
export const musicConstants = {
	GET_MUSIC_ITEMS_FROM_API: 'GET_MUSIC_ITEMS_FROM_API',
	CREATE_ADD_MUSIC_ITEM: 'CREATE_ADD_MUSIC_ITEM',
	UPDATE_EDIT_MUSIC_ITEM: 'UPDATE_EDIT_MUSIC_ITEM',
	DELETE_MUSIC_ITEM: 'DELETE_MUSIC_ITEM',
	LOAD_MUSIC_ITEMS_TOPAGE: 'LOAD_MUSIC_ITEMS_TOPAGE'
};
