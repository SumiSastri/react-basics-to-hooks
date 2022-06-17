Data in tables can be populated with API calls.

- axios or fetch can be used as a http-runner
- the `useEffect` hook calls the data when the component mounts the DOM node
- the syntax is slightly different - with the fetch api you can write the api call in 2 ways

- nest the api call in the `useEffect` hook or write a custom function and call the function in the `useEffect` hook
- with axios the library needs to be imported and used.

1. make the api call
2. populate the jsx for the render method
3. then import react table to manipulate table data
