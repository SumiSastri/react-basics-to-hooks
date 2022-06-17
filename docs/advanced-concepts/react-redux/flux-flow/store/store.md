The purpose of this documentation is to explain what the redux-store is and its function in the react-redux app-state management. It is a theoretical overview. The practical set-up of the store is in the ```store-setup.md``` file.

## What is the redux store?

Store is an object. It therefore has all the properties of an object. It is not a class or a constructor. It has a few methods that are baked-in to the store-object.

It is a way of globalising the data in an app and allowing components and containers to access the state of the app. It solves the problem of prop-drilling where props can only be passed from parent-to-child and not at the same level (siblings) or one-level-up (granparent).

Documentation: [https://redux.js.org/api/store/]

There are three states in the store:
- Pristine (default state)

Note: To ensure the pristine state does not change, in the switch method in the reducers the spread operator is used to return the original pristine state before it goes into the next state - the touched state.

- Touched  - (by the changes sent to the store via the root reducer)

Note:

These changes are mapped from the component-containers as props to state as embedded payloads of these utility functions. The reason why the ```mapStateToProps``` method is used is because the ```array.map``` method, creates a duplicate copy of the information in the component-container. The original component-container state therefore is unchanged. 

- Touched Error - returns rejected props mapped from action utility function written to handle changes in the components-containers

Note: Error handling is taken care of outside the store, utility functions are written to display error messages to the end-user. Debugging tools are also available in the development environment to debug code and understand why and error has occured.

## What does the store do?

The function of the redux-store is to hold state as the single source of truth. It is immutable and in one place, preventing “ghost” instances of data (state) in the app.

The four methods that are attached to the store object are:- 

```getState()``` - it returns the last value returned by the root reducer. The reducer and the store are tightly coupled. It is only via the root reducer that the store gets its information of changes being requested by the components-containers.

```dispatch(action)``` - it dispatches the changes state from the ```getState()``` method that conveys the last value of the root reducer. This action is dispatched to the component-containers listening to these changes. The action itself happens outside the store in the components-containers. The action is a description of the action and the payload (change in data requested by the ui). More about actions in ```actions.md``` and the actions folder.

In a counter that increments a count by one what store is doing is ```store.dispatch(incrementByOne())``` everytime the function is updated store listens and re-executes ```store.dispatch(incrementByOne())```.

By using mid-ware to intercept this function, dispatch can be used as a call back to handle asynchronous calls. 

```subscribe(listener)```- The store notifies components/containers via the subscribe method. This method  listens for changes in the component-container state that has been described by the action sent to the reducer and imported by the store in the root reducer. The function is evoked every time an action-payload is sent via the root reducer. The store goes through all the ```mapStateToStore()``` methods and ascertains which component/container is looking for a change - this an expensive/programmatic overhead which is why react-redux is only necissary where there are complex, frequent state changes.

Note: There is also the option to ```unsubscribe(listener)``` this invokes the function returned by subscribe this function is written outside the store in the component state and dispatched, once again, as an action to the reducers. An example is in the documentation link shared above.

```replaceReducer(nextReducer)``` The store 3 states are recalculated by the information in the root reducer payload. It replaces the reducer currently used by the store to calculate the state.  More about reducers in ```reducers.md``` and the reducers folder.


