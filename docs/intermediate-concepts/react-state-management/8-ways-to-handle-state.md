React is designed to allow developers to make their own data-management decisions.

Most developers don't put much thought into data-flow and front-end architecture. This can make it difficult to understand data-flows in a React app app.

Often data is one big tangled interdependant play of data shared via state and props across various components.

The purpose of the documentation is to provide the intermediate React developer with the 8 common ways that state can be stored in a React App

**What is state?**

State is the data the component holds, updates and displays. The state object holds the underlying data that may change over time.

**What are environment variables?**

Environment variables are also a form of data. However, this static data does not change over time and often is stored in a `.env` file.

**What are configs and utils?**

Some static configurations which could be functions that do not change are typically stored in config or util folders - they may change state but they do not intrinsically change over time.

**What are the eight ways to store state?**

1. In a URL (Unique Resource Locator) finds a specific page on you web app

   Current app location and settings (the page the user is viewing) can be stored in a URL (routing)

   The page may have dynamic data that changes
   eg:

- Filters
- Pagination
- Sorting settings

- Current item been seen

  URL is a system of record - avoid redundantly storing it in your app
  React-Router handles URL related state as single-page-applications have only one page displayed.

2. Web Storage in the browsers - one browser where data persists between sessions

   Via the browser to cache data make it easier for users to reload (or event reboot) a page quickly and for data to persist between sessions on one browser.

- cookies
- localStorage
- indexedDb

  Useful for storing items in a shopping cart, partially completed form data.

  Not good for sensitive data or data that needs to persist. If user changes browsers then data lost. It is session based.

  Encrypted cookies for user authentication/ session authentication-recording session information.

Web storage is tied to a specific browser, avoid storing sensitive data here.

3. Local Component State - when one component only needs this data and it is not needed by other components

- Form Data
- Toggles (behaviour changes)
- Local lists

Data in the parent state then transferred to child components via props (which are immutable objects). This means if you declare a prop in a child component that has not been defined in the parent component the data will not render.

4. Lifted State - used when a few related components need the same state

Lifting state is the refactoring process of moving local component state to a parent component so that data can be reused in different components that need the same data

- State is lifted to the top of the tree and the data is declared in the state object here
- The data that is needed for the components that share this data is passed down via props
- A parent-child relationship is created linking the child components with the props declared in the parent component
- The child component receives the props either as static data or methods

5. Derived State - derive state from existing state or props on each render instead of storing it. State is used and not defined explicitly.

   State that can be derived from an existing state through the object tree eg: The global window object has its own JavaScript methods

   Derived by reference like a function not a direct value but a derived value.

- Array methods eg. the `.length()` method can be used on an array stored in local state as the global JavaScript `Array.length()` method is derived.

- Errors eg: you do not need to store the errors array or define it you can use promise based `async-await` and `try-catch` blocks to call the errors methods in the global JavaScript window object.

Similarly with props you can derive the data from the props passed down - you do this to keep your code in sync (avaoiding bugs) and to simplify and keep code clean.

6. Refs - it is an abbreviated form of DOM-reference (document-object-model reference). It holds the reference of the exact node in the DOM-tree.

Refs are useful in forms where React has no control over their value.

for state that does not need to be rendered - timers/uncontrolled components (forms, modals)

- Check the `refs-directly-access-DOM.md` file as well for more information

  7.Using a global or sub-tree state

With React, the Context-API can be used for larger apps instead of lifted state.

Data is stored as a context object using the Context Hook made available to multiple child components.

The Context Hook may store the whole state tree of the whole app or a significant portion of the data from the state-tree. Context avoids prop-drilling as it offers a global state or a sub-tree state.

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
- Swr (stale while refetching)
  With graphQL
- Relay
- Apollo

Managing React State- Cory House [https://app.pluralsight.com/course-player?clipId=6ca18055-acd6-4b1a-ae19-d4328fe49855]
