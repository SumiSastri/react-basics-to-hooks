The purpose of this documentation is to outline the steps needed to create a form, capture data from users, update a data store (browser/ server side) with this data-input and then render this data out in a component.


__Design the Display Component and Form Component__

1. Decide what data you want to capture - this could be static data or functions that trigger updates to a page
2. Design your form inputs based on the data you wish to capture
3. Decide where and how you want the form to be displayed - a page/ modal/ drop-down
4. Create the form page with the inputs required
5. Decide where you want the data to go - browser/ back-end to a data-base
6. When the data is returned (from the browser store or the database), where do you want the information displayed
7. Design the display of the form data when it comes back after successfully capturing the form data

__Decide Parent Child relationships for data flow__

1. Where the data is displayed is the parent component 
   - Note: this parent component can pass the display to another child component such as a modal/ another page
2. Where the data is captured is the child component

The parent-child relationship now is established.

A parent component consumes the child component and the child component is imported and nested in the parent. The child component is a provider of ui to a component if it is a presentational component or the provider of data if it is a stateful component.

 Two methods can be employed - both components can be stateful or only the parent component can be stateful. Data therefore can flow from child to parent (in 2 stateful components) or from parent to child where there is one stateful component (the parent).

__Establish data flows between Parent and Child Components__
If the parent component is the stateful component - data can only flow from parent to child.

1. Set up initial state with the object that will hold all the form data
2. Set up you handleFormInputChange utility function in the parent component - this captures the target value of the event fired (here it is user inputs)
3. Set up your handleFormInputsSubmit utility function - direct the new data to the browser storage or backend
4. Connect the parent and child - import the form that you have designed into the parent component.
5. Set up the prop-attributes - the handleFormInputChange and the handleFormInputsSubmit methods need to be passed as props into the form component so that the child receives the data from the parent
6. Pass these functions to the form and use them in the inputs that need updating and submitting
7. Use a form jsx and onSubmit event in the form jsx, onChange for the inputs that require the change utility function

__Create utility function to update state with new data item from data fed by user__

1. Add all the fields in the state of the component that you want updated
2. Generate an id with uuid library or ```Math.random()``` method - this is only for student/ side projects as the id is random but not necissarily unique and can have unintended side effects (deletes 2 items with the same id)
3. Set up all your change event handlers as described above
4. The create utility function uses the ```setState({})``` method to update the values captured by the submit data function
5. The submit function must return a plain object that represents the updated state
7. The submit function must mimic the state object and the create function uses this function as a param in setting state
8. The create function therefore must take one argument - updated state in the form of a plain object
9. The function should return initial state (or state with a spread-operator to encompass all the key-value pairs outlined in the initial state) and then call the ```setState({})``` method
10. The ```setState({})``` method returns the argument of passed by the submit function - it returns the state updated by the user captured in the handleFormInputChange function and submitted by the handleFormInputsSubmit - this once again is a plain object with only the key-value pairs that the form aims to create/ update

__With 2 Stateful Components Pass Data from Child To Parent As Well__
If the parent component is the stateful component - data can only flow from parent to child. With two stateful components however, data can flow from child to parent as a stateful component holds state and can pass state to another component as props.

__Form Component As Stateful Child__

With the form component as a stateful child component, all the data that the form needs can be set up in the form component. The change input handlers and the submit handler can be set here. These can directly be passed to the form inputs.

However, the submit handler information needs to go back to the parent to update the state-tree in the app. Therefore the form component still needs to be imported by the parent component.

The component attributes will hold the state of the form component as a stateful child as props now (as state no longer resides in the parent but child). They are defined as ```this.props``` in the import as they are bound to a different stateful component - the form as a child stateful component.

__Modifications to the stateful parent__

1. The form as stateful child is imported - therefore all the methods in this child component are available to the parent ```demoCreateFormStage1.js```
2. The JSX component takes in the attributes of the input change handler and the submit form handler in the form of ```this.props.nameOfChangeEventHandler``` - this can also be deconstructed in the render method ```demoHomePageStage4.js```
3. The create utility function takes one argument (the submit function data as ```this.props.submitHandlerName```), this is still a param of this function. 
4. When state array updates with the new item, it is automatically passed into the child component  - the list component