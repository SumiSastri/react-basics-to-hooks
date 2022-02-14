The purpose of this documentation follows on from the overveiew of the reducer docs and outlines how to set up both reducers and a root-reducer in a react-redux app. For a theoretical overview of the nature and purpose of the reducers, refer to ```reducers.md``` in this folder.

__How to set up multiple reducers__

1. The reducer is a function that takes 2 params state and actions.

```const reducer = (state, actions) {}```

2. For the reducer to update the component state, the actions (changes that the component state requests) need to be imported from the action-creatores

```import NAME_OF_ACTION_TYPE_CONSTANT from `../name of file path` ```

3. In react a functional component is created and exported

```
const reducerOne = (state, actions) {
    <!-- FUNCTION BODY -- DO SOMETHING TO UPDATE STATE -->
}
export default reducerOne;

```
eg: of the code block in the function body

```
import ADD_TODO from `../name of file path`

const initialState ={
    todDos:[]
}

const toDos = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				toDos: [ action.payload, ...state.toDo ]
			};
			return state;
	}
};
export default toDos;
```
4. Several reducers may be created in an app

```
const reducerTwo = (state, actions) {
    <!-- FUNCTION BODY -- DO SOMETHING TO CHANGE STATE OF THE SECOND COMPONENT -->
}
export default reducerTwo;

```
5. Each of these reducers may be imported into a section root reducer

__How to combine multiple reducers into a single reducer__

These simply pass-on the reducers value to another file - when doing this ensure that the naming conventions are consistent.

1. To combine reducers into one reducer the ```combineReducers()``` method is used

2. Import the method from  the redux library

```
import { combineReducers } from 'redux';
```

2. Import the reducers you wish to combine into one reducer

```
import reducerOne from '../name of file path';
import reducerTwo from '../name of file path';
```
3. Call the combineReducers method, the params of the method take in a simple object with key-value pair of your state and the reducer function name

```
export default combineReducers({
	toDos: reducerOne,
	blogs: reducerTwo
});
```

If you are moving this reducer one level up remember to give your local state in the reducer the same name and as you are when you pass this up to the app root reducer.

eg: moving section root reducers to an app root reducer.

```
import { combineReducers } from 'redux';
import sectionOneRootReducer from '../name of file path';
import sectionTwoRootReducer from '../name of file path';

export default combineReducers({
	toDos: sectionOneRootReducer,
	blogs: sectionOneRootReducer
});
```
