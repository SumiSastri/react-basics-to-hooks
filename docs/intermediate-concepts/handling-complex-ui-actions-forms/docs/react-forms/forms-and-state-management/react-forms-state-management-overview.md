**React forms state management an overview of different options to manage form state (data)**

Official React documentation on forms[https://reactjs.org/docs/forms.html]

State in forms is local (on the page it is captured) and ephemeral (Dan Abramov) - in the sense it keeps changing as users access forms to input new data.

State therefore in forms is controlled locally on the form page before it persists into the application's database or state-management tools.

State management in React forms the subject of a lot of debate and discussion. This is not an exhaustive guide but these are some of the common ways that local state on forms is updated and maintained.

React-2016(Class-compoments): Local state is updated by the `setState()` method

React Hooks: The `useState()` hook replaces teh `setState()` method

React-Redux: Local forms' state is updated with the flux-flow using actions, reducers and a store. This is not essential to maintainiing state but can be a useful tool to scale. Further reading: How to choose between Redux Store and React State [https://github.com/reduxjs/redux/issues/1287#issuecomment-175351978])

Formik: The `renderProps()` method in React is used to make handling changes and submission of forms easier, Formik is one of several libraries that provides solutions to state-management of forms in React
