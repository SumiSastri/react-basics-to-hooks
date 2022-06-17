The purpose of this documentation is to outline the difference between React forms in the React library and Redux forms which does not ship with React-Redux. Redux Forms is a separate library. It is not always recommended to use Redux Forms even if you use React. There are other form libraries (Formik, for example) outside the React libraries eco-system.

## React forms and tables

Forms and tables in react work slightly differently from other components and containers.

1. Actions in stateful components/containers interact purely on event handlers - mouse overs, click of buttons. The state of the page changes on these events.

2. With forms and tables the state of the component/container changes because the user adds information/updates information and data is captured on the front end.

Both components and form components can be either presentational or stateful. A form's state can be defined by the parent. Equally a form can also have it's own local state updating a few elements on the page relating to the overall app-state (all information of everything that a user can do on the site).

Forms have input fields that are different depending on what they are used for - text for text; numbers for numbers; passwords to hide a password; - fields can be required (mandatory) or not.

Tables have input fields also vary depending on how a table is laid out - images, badges, icons, ids, product lists all need to be laid out and if a table has to be updated with new information rows and columns in the layout need to be updated as well. Tables are data-intensive components and with every update will be re-rendered.

Updates on forms and tables need to be 1) Captured 2) Sent to a database/ browser storage 3) Rendered

As the state of the page is changing state modifications need to be handled within the React life-cycle methods.

Therefore there are several considerations when setting up forms or tables in an app.

## React-Redux the combination of libraries for forms and tables

React-Redux Forms are a powerful combination of libraries to keep state in forms dynamic and controlled (virtually mimicking the functionality of HTML forms that holds state at all time). 

This project does not use HOCs from Redux-React forms, but I have included a note on package set up in case I want to re-factor this project to include this set-up.

Forms handle a high load of ui-changes. Some of these changes are immediate changes (synchronous) and some of them are based on event handlers being triggered (asynchronous). These synchronous and async changes are maintained and updated more deeply and dynamically in React-Redux forms.

Ideally data should be stored server side in redux to increase stability of the app’s store, but it can also be run client side as a predictable state container for javascript.

It can be stored project by project with a store wrapper as it is very light (2KB) including all dependencies, it makes the app and form handling fast and easy to install in legacy systems.

Components send information to the store via actions Redux forms need additional set up to work with store through some specialised methods and higher order components (HOC’s). The reduxform() method takes the form configuration object and returns a new function that wraps the changes coming in specifically from form actions.

With forms, higher order components (HOCs) connect the form components to the store object. Form components have several event listeners, the Redux form method looks at all of these event listeners and ensures that the higher order components are set up to register listeners of events and unregisters these listeners in the Store.

This is specifically important for the handleSubmit (onSubmit) event handler. On keyboard, mouse and other changes are also important to track form engagement via user experience events.

This higher order component, is exported at the bottom of the form - export default reduxForm({})

A little more about the special case of the event handler onSubmit Submitting all a forms information (data) has a chaining method to handle the submission of the information, spotting errors in the submission and catching these errors. Submission is with the values described by the user. OnSubmit(values) are passed as a JSON object. They need custom functions to handle both state (the values or data submitted) and validation (that the values and data submitted are correct). The error code block is a custom block that returns rejected props based on certain conditions and on
```
.then()
.throw new Submission Error({})
.catch()
```