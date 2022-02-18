tep 5 : Set-Up Dispatch
The dispatch function is the only way to trigger a change in state. The function when run - either sends the action and state tree data to the reducer to be transformed.

The dispatch method can also call the reducer function

When it calls the reducer function, it

notifies component listeners to the “next” change in the state tree rejects the props with errors and dispatches error messages maps the “next” change in the state tree to the component When it dispatches actions and state to the reducer, there are custom functions that are written in Middleware (like Thunk) and passed to the base-dispatch function. Custom dispatch function accepts sync or async actions via middleware. Middleware wraps the base dispatch function and can transform, delay, ignore, the payload, and pass the information down the middleware queue of data. Middleware will eventually dispatch a plain object actions using the dispatch method.

The base dispatch function always synchronously sends actions to the stores reducers along with the state tree to calculate the new state, actions are plain objects ready to be consumed by the reducer

Once the store receives the information from actions and converts these actions that update state the new state needs to be dispatched back to the components via the dispatch method.

The dispatch method therefore takes the information from the reducer and dispatches it back to components.

The store receives the map methods and via the dispatch(action) method converts the action payload to the dispatch payload

Set up Dispatch changes to the components that have subscribed to the changes store.dispatch(action) function, the mapDispatchToProps(dispatch) sends user data like admin fields, how toggles change, error handling to the component.
