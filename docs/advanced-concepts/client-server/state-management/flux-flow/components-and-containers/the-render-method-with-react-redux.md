Five: 24:00 onwards


How does Redux-React render components and pages?
These dispatch functions are connected via the {connect} higher order component import to the counter component and exported back to the store and the Provider component. Provider wraps the Redux HOC into the Redux library framework.

Writing the render functions wrapped in the Provider tag

Displays data from stateful components via props to stateless components

The stateless components are routed to Index.js, which registers the ReactDOM.render() method which registers the react virtual DOM

Redux is a wrapper in the React library via the Provider HOC, so it is passed as a prop of the react main.js (or app.js) component

If any change is required to the stateless component, actions need to be created to send them back to the stateful component and the whole cycle starts again.



Create store with initial state and import redux middleware, store and other redux library dependencies, import the reducer files that will replicate initial state and dispatch actions to components
Components
Map payloads as props to the store via creator actions (action payloads) and listen for change and receive redcuers (changed state payloads)

postsform.js posts.js

Actions
Creator actions - payloads that go from the components to store via map functions (mapStateToProps, mapDispatchToProps )

postActions.js types.js
