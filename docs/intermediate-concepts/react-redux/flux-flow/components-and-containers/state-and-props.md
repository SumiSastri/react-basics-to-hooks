The purpose of this documentation is to demonstrate how redux attempts to solve the challenge of prop drilling.

__What is prop-drilling?__

In a react-component state can be passed down from a parent-component to children components. Data flows from parent to child.

If there are several sections in an app the Index or Home page usually holds the state of the section and state is passed down to the child components.

However what happens if another section requires that information? For example the users section may have a users home page that allows the user to login/ register/ guard personal information. This data may be held in the stateful component at the top of the state tree in this section.

Now another section is created - perhaps a budget app for the user. Only authenticated paying users can use this section. However the direction of the data flow is held in a silo in the user section.

State can be lifted here to the ```App.js``` file then passed down to the budget section. As sections in the app grows with the app's user requirements, it becomes difficult for a single file, such as ```App.js``` to hold all this information.

Equally, with passing down of a prop the prop needs to be passed to every component in the component tree -eg: The ToDo Home page passes state to the list of Todos page, the single card showing one toDo in detail page, to the addToDo page, etc. If only one component needs a part of the state in the parent component, this can not directly be passed from parent to grandchild. It has to be routed through the parent as well.

With redux the method ```mapStateToProps()``` maps state as a prop to the store via the ```connect()``` method that binds the react-ui state to the redux state-management store. 

When state is mapped as props to the reducers, store now holds all the information of state and its props and only the components that need to be updated can be access via switch conditional cases written in the reducer method and passed to store. The  ```store.dispatch()``` then deals with dispatching state as props back to the only the components that have requested these changes via the reducer method.