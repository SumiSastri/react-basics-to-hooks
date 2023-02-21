**The http response-request cycle or data-driven forms**

- When you request data the data comes back as a response object
- The response object needs to be converted into a json object
- The json object - or the data that is required by the component is set to the local state of the component
- This now updates initial state
- The render method in React can render the updated data
- This is done with a series of promises using `async-await` and `.then()` blocks and the `try-catch` methods to catch errors

The challenge with data-driven forms that when you call the data by the time the request comes back in the returned promise the component using the data can error out as no data is coming in while the data from the API is loading.

The way around this is

1. Set a loading message so while the data is loading a loader is shown with the logical `&&` which evaluates using boolean-logic the left-side of the argument and loads the loader if data is loading and not the component that requires the data as the component is rendering null (nothing)
2. Use `async-await` and `try-catch` blocks to handle the `req-res` promise-based HTTP call-back
3. Use the `setTimeOut()` method
