The purpose of this document is to outline how a stateful component in React can be refactored to lift-state into the Redux store.

__What does lifting state mean?__

In a react component, state is held in 'stateful' or class components with life-cycle methods. Functional components with modern React also have state.

Using redux means that state no-longer is held in individual components. The data is moved out of the components into a central data-warehouse which is the data-store.

The only way into the store is via a reducer method. Several reducers in the app connected to several components-containers receive these changes from the component. Therefore the component passes state into the reducer. All components that receive props from the component state also pass this data to the reducers.

The reducer function compares the changes requested by the components-containers to initial state and calculates the difference between the changes requested.

All reducers then are combined into a single root-reducer which transmits all of this information to the store.

The store now has all the state changes as well as the initial state of all components. Moving state out of the components-containers via reducers to the store is the process of lifting state.

__Steps to lift state__

1. By connecting react ui library to the redux state-management library via the connect method (see ```connect.md```) at page level.

2. Mapping existing state (or intended state if you are not refactoring legacy-react) to props with the ```mapStateToProps()``` method.

3. Moving all functionality (functions) out of the component into action-types/ actions and action-creators

4. Passing the payload (information/ui change) of the action-creators to the reducers

5. The reducers change state not the legacy react-components

6. Changes to state transmitted via the reducer which is tightly coupled to store as the only route to change the component

7. Store calculates changes ```store.subscribe()``` emits changes required to the component - component mounts with the initial state, updates with the updated state.
