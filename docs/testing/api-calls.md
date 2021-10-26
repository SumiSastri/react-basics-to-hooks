With an API call, the data is only rendered after the API is called.

With Hooks, the lifecycle methods are completely replaced with the `useState()` and `useEffect()` hooks

Integrated tests rather than unit tests

1. Render component

2. Interact with the DOM

3. Make assertions that DOM is as expected

4. Mock API calls (also called stubbing) - Why mock?

- API calls are expensive
- Calls are slow
- Testing calls are short and frequent and devs need fast response to check features that are local not external

Tute: Net Ninja: [https://www.youtube.com/watch?v=TBZy-Rc-xX0&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&index=13]

Example mock: Net Ninja - GitHub file [https://github.com/harblaith7/React-Testing-Library-Net-Ninja/blob/main/src/__mocks__/axios.js]

How to create mocks for APIs

- create a new _mocks_ folder
- In the `useEffect()` hook log the data to see its shape in the google console
- create a `.json` object that matches the shape of the api-data (exactly - check for trailing spaces/ typos and case-sensitivity of the key-value of each object)
- import the mocks file into the test file
- use the mock methods in the library of choice
- configure the behaviour of the mocked service

5. Mock events - If you want to simulate change
   Example:
   `fireEvent.onChange(elementName, {target: {value:'Change me'}})`
