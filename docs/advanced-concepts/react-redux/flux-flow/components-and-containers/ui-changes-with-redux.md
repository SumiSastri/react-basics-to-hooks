The purpose of this document is to briefly outline how complexity in component-container changes are managed by react-redux.

__Components, Containers and the Connect Method__

1. The first step is to design a wire-frame of your ui-components-containers for look and feel, user experience and user-journeys and determine how the module/section works before you create the react components-containers.
2. Decide what data needs to be displayed from the back-end database
3. Decide what user actions will change the component-container ui
4. Code and display presentational components in React and make sure that the presentational components are rendering and that the ux-uxd-ui-uid (user experience, user experience design, user interfaces, user-interface-design) is what you want
5. Import the connect method into the components and containers that you anticipate will need to be updated frequently.

Actions that the user needs to take should then be identified

- Do you want to handle a click event, submit a form, update state of the form to render data?
- All the functions that you would write in a class component now need to have a list of action-types 
_ As these actions are likely to change local state and you are moving state out of the component the process of lifting state lifted out of the component starts
- All the props that have been passed down from state as props to the children of the component now also need to be refactored and dealt with so that they get their information to update state from the store
- If you are starting from scratch without any react functionality or props passed down from state to other components you will set up actions/ action types and action creators
- These action-creators will lift the local state out of the component and move them as payloads and types to the reducer
- The reducer will then transform state and send this information to the store
- The store will update as it is tightly coupled with the reducer
- The store will dispatch the update back to the component.
