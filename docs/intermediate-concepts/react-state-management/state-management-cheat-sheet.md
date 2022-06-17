React is designed to allow developers to make their own data-management decisions. 

Most developers don't put much thought into data-flow and front-end architecture. This can make it difficult to understand data-flows in a React app app. 

Often data is one big tangled interdependant play of data shared via state and props across various components.

The purpose of the documentation is to provide a quick cheat-sheet for state-management. 

__What is state?__

State is the data the component holds, updates and displays. The state object holds the underlying data that may change over time.

__What are the eight ways to store state?__

1. In a URL
Current app location and settings can be stored in a URL (routing)
- Filters
- Pagination
- Sorting settings
- Current item been seen
URL is a system of record - avoid redundantly storing it in your app
React-Router handles URL related state

2. Web Storage
Via the browser to cache data make it easier for users to reload (or event reboot) a page quickly and for data to persist between sessions on one browser
- cookies
- localStorage 
- indexedDb
Useful for storing items in a shopping cart, partially completed form data. Encrypted cookies for user authentication/ session authentication-recording session information.

Web storage is tied to a specific browser, avoid storing sensitive data here.

3. Local Component State
When one component only needs this data and it is not needed by other components
- Form Data
- Toggles (behaviour changes)
- Local lists

4. Lifted State
When a few related or multiple components need the same data
- State is lifted to the top of the tree and the data is declared in the state object here
- The data that is needed for the components that share this data is passed down via props
- A parent-child relationship is created linking the child components with the props declared in the parent component
- The child component receives the props either as static data or methods

5. Derived State (read more I don't understand this)
State that can be derived from an existing state through the object tree eg: The global window object has its own JavaScript methods
- Array methods
- Errors Object

6. Refs - for state that does not need to be rendered - timers/uncontrolled components (forms, modals) 

- Check the refs-directly-access-DOM file in the mvc-virtualDOM folder

7. Context-API
In a bigger app, where the whole app  or a significant portion may need all the data to function, a Context-API/ or the Context Hook can be used as it holds the whole state-tree. Context avoids prop-drilling as it offers a global state or a sub-tree state.

- Logged-in user
- Authorisation settings
- Themes
- Internationalisation settings

8. Third party-libraries - if you want one global state or need to access remote state via an API call

In app state
- Redux
- Mobx
- Recoil
- Flux (Facebook)

Remote state - API calls can also be handled by 3rd party libraries
- react-query
- Swr
With graphQL
- Relay
- Apollo

__What are lifecycle-methods and why are they needed?__

As a component's data changes, the state object is first rendered in its original state when the component mounts. Data is re-rendered everytime the ```setState({})``` method is called re-rendering only the props in this method, or when the ```useState()``` Hook is used to update state.

As State determines how the component is updated and re-rendered. Class components must have a render method to display the information held in State. Without the render method, the function gets executed in the console but will not be rendered to the DOM.

With Hooks, the lifecycle methods are handled by the React Library with the hook ```useEffect()```

