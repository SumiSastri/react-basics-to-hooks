import { createStore } from 'redux';

// demo reducerr is sent to the store via the root reducer
const store = createStore(rootReducer);
// store calculates changes required by the component to the state of the component
// from the information chunked to it by the root reducer
// store dispatches an action for the component-container to update that peice of state that requires change
store.dispatch(demoToDoAction);

// store subscribes to the changes to show the
store.subscribe(() => {
	console.log('state updated');
	console.log('store getState', store.getState());
});
