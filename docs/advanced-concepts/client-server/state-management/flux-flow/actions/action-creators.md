The purpose of this documentation is to outline what action creators and how to use them in react-redux projects

__Documentation__

__Resources & Further Reading__
Valentino's blog: [https://www.valentinog.com/blog/redux/#asynchronous-actions-in-redux-with-redux-thunk]

__What__  

Action creators are utility functions that return the payload change from one component-container state to another. 

Both synchronous and async action creators send information (payloads) to the store for component updates.

__Synchronous action-creators__

These do not depend on external data calls (API-calls). All action creators should return a type and a payload. These are then imported by the reducers and the next state is determined by the reducer function.

__Asynchronous action-creators__

In this example, ```getMusicItems``` is the action-creator that takes the dispatch function as its arg. To make an API call either the axios or fetch HTTP runners can be used. With the ```axios.get()``` method, first arg is the api HTTP call, the second is what happens to the actions payload. The ```store.dispatch()``` method is intercepted by the middleware and takes the args of the actions-creatore - type & payload - payload here is in the shape of the response data returned from the HTTP call.

__Why__ 

__Where__ 

__When__ 

__How__ 

```
export const handleIncrement = (number) => {
	return {
		type: INCREMENTER,
		payload: number
	};
};
```

```
export const getMusicItems = (musicItems) => (dispatch) => {
	dispatch(setMusicItemsToLoading(musicItems));
	axios.get('/music-inventory-api').then((res) =>
		dispatch({
			type: GET_MUSIC_ITEMS_FROM_API,
			payload: res.data
		})
	);
};
```
**Gotchas**  






