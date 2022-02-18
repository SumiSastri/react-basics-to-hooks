
so that the code can exit performing only the action required at the time.

The store subscribes to these changes with the ```getState()``` method, sent to it by the root reducer that combines all the changes and chunks and batches updates to the store.

 - Subscribe to changes from store with mapStateToProps in the Component that requires state changes
	- Call the action function from the component that requires an action
	- Import connect object from react-redux
	- Set up connect - which maps state object to props 
	- Export default the connect object with the map to state  & get items function params to App.js (provider imports the module)
	- Add lifecycle method - ```componentDidMount``` to connect the actions object
	- Change ```this.state``` to ```this.props``` 

Modal
- If you want to continue to use the component as a functional component you can import state by importing ```{useSelector, useDispatch}``` object from react-redux

     - ```const dispatch = useDispatch();```
- With Thunk you do not need to do this









 








 
 - Dispatch
  - the dispatch function is the only way to trigger changes in state, once a change has been triggered the whole state tree is returned in its pristine and touched state to the reducer
  - to each of the actions in the items action, add a dispatch function to dispatch the action payload to the store
  - update all ids in the stateful components to _id as we have removed uuid and will be using the mongoDb _id
  - set up the actions with axios to call the data from the api in the back-end routes
  - clean up naming convention - the name-value pairs in the objects should be exactly the same
  - clean up code remove unwanted console logs and commented out code
		- When dispatch calls the reducer function, it
		* notifies component listeners to the “next” change in the state tree
		* rejects the props with errors and dispatches error messages
		* maps the “next” change in the state tree to the component
		* When it dispatches actions and state to the reducer, there are custom functions that are written in Middleware (like Thunk) and passed to the base-dispatch function. 
		* Custom dispatch function accepts sync or async actions via middleware. Middleware wraps the base dispatch function and can transform, delay, ignore, the payload, and pass the information down the middleware queue of data. Middleware will eventually dispatch a plain object actions using the dispatch method.
		* The base dispatch function always synchronously sends actions to the stores reducers along with the state tree to calculate the new state, actions are plain objects ready to be consumed by the reducer

The store receives the information from actions & updates the touched state-tree, both the pristine state and the touched state tree are dispatched back to the store. The store receives the map methods and via the dispatch(action) method converts the action payload to the dispatch payload. The dispatch method therefore takes the information from the reducer and dispatches it back to components. 