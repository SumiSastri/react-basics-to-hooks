**State management and code execution (browser parsing) of react form components explained**

In a React form there is an order during the lifecycle of the component when state is updated and rendered.

1. Component Initialisation: Initial state (empty - ready for user input)
2. Component LifeCycle: Component mounts on the DOM/ Component renders/ Component unmounts
3. User Input: User interacts with the Component (adds inputs)
4. Callbacks - Event (Change) Handlers: The render method runs a call back function to update state (`setState()` or `useState()` or the flux actions-reducers-store where local state is hoisted into a store where initial state as null starts the flux pattern)
5. Component Updates: Each key-stroke state triggers the `componentDidUpdate()` method and the component is updated via the call back function (handlers - `handleChange()` functions)
6. Component Re-renders: Triggers lifecycle repeat -The component mounts with the change on the DOM, renders and unmounts till the next key stroke and change-handler that is fired
7. With a console log this continues user-input/ change-handler callback firing/ component updating state/ component re-rendering can be followed

State management may start from validating a form but it continues into managing the life-cycle of this state through the application - into the servers, databases and anywhere else that ephemeral data is expected to be secure and to persist.

This persisted data may be called back again into the app to be rendered on other pages of the app.

When data needs to be captured updated deleted and submitted - the whole CRUD(create-update-delete) cycle - mainly executed via API-calls and the `useEffect` hook or in the `componentDidMount` life-cycle in class components.
