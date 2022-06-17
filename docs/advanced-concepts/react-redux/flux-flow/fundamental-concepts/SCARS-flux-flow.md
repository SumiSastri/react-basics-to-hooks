## Unidirectional data flows in redux explained with the CARs acryonym

The purpose of this document is to demonstrate how redux data flows from the back-end of an app to the app's component state.

All data flows from the store which is single source of state management in the app. This prevents lurking state and confusion as to what state holds during the process of prop-drilling in React.

For my own benefit, I have created the acronym SCARS (it could have been ARCS or SARC or even CARDS - Component, Action, Reducer, Dispatch, Store)

1. S (Store)
The alpha and the omega of the flux flow. It holds immutable state, is only accessible via reducer actions (switch statements), these evaluate the actions with a strict comparison the updates are dispatched back to the component for the re-render.


2. C (components and containers)
All changes to the front-end app happen here due to user interactions. However the component now has no state - state moves to the reducer, all changes required to the component move to the action-creators and are described by the action-constants (also known as action types). 

The methods from the react-redux library that are used in the component state are:-

```
connect(), mapStateToProps(), mapDispatchToProps()
```

3. A (action-creators and action constants/ types)
Action creators replace all functions that are written in the body of a stateful component. These functions are written when the component mounts, updates and unmounts. They perfom the functions of showing, hiding, adding, updating or deleting information from a data-store on the component.

Action types or string constants describe these actions in serialised strings. They are unique and identify the exact action creator payload they are connected to.

They are stored and exported in a separate file and imported by the component and the reducer.

Action creators are dispatched to the store that requires these changes and via state (lifted) to the reducers that reduce and update the state of the component.

The component imports both the action-creator maps the local state as a prop then dispatches this to the store with another map method.  State is available as a read-only props.

The component is connected at a page level to the redux store with a Higher Order Component (HoC) from the react-redux library. On the page/ component requiring the change, the ```connect()``` method is called. It wraps the local component as it's key argument.

Data flows are uni-direction from a React component to the Redux store via an action (or payload) the action is dispatched to the store.

They are stored in a separate file and perform all the utility functions the components need - api-calls/ event handling/ logic required for the state to change and be rendered.


4. R (Reducers) The component now has no state and no actions that it performs. The actions are moved on to the reducer which now holds local state.

The reducer describes initial state of the component and represents the first call of the component mounting - a null call. The second render in the react-lifecycle method is set by the ```setState({})``` method which no longer exists and is replaced by a series of switch statements that update and set state of the component requiring the changes described by the action-constant and the action-creator payload.

The reducer is a function that takes 2 arguments. The initial (null state) for the first render and the action (type & payload for changes required).

The reducer now reduces these arguments with the HoF (higher-order-function)
the reduce method accumulating all changes into one statement in the root-reducer.

The switch statement allows the code to exit making only the changes required by the components requesting changes, setting and updating state locally for the component.

The evaluation is against the initial null state which is returned with the spread operator, against the updates required. By reducing all the requests to one root reducer for the local changes performance is helped as changes are chunked and batched and then sent via a single app-level root-reducer to the store.

Methods from the react-redux library:-

```
reducer = (state, action) => {// do something in the switch statement to update initial pristine state with the action type and payload reduce this to one statement for the root reducers}
```
4. The store now processes this information and dispatches changes to the component.

At an-app level the ```provider``` HoC has the prop of the ```store{}``` and provides the store and all its methods to all the pages of the app.

The store is the single source of truth and holds the application state abstracted away from the components-containers and other app functions. 

It applies the changes in the reducer and sends these changes back to the components-containers requiring the changes and updating the component-container state with the requests from the root reducer

5. S-C (Store & Component) 

The store now  sends changes sent back to Component -  the React component subscribes to the changes from the Store with listeners. The updated state tree is decoded and the Component re-renders. 

And the cycle starts again when there is a new change.
