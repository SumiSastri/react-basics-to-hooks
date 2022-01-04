With an API call, the data is only rendered after the API is called. With Hooks, the lifecycle methods are completely replaced with the `useState()` and `useEffect()` hooks. The general structure of how to test an api-call is the same with some differences.

1. Render component
2. Interact with the DOM
3. Make assertions that DOM is as expected

There are 2 ways to do this - you can check the API call by expecting it to match the URL

```
const img = findByAltText("artists work");
expect(img.src).toMatch(/https/);
```

but this is not best practice as:-

- API calls are expensive
- Calls are slow
- Testing calls are short and frequent and devs need fast response to check features that are local not external

The key difference in the best practice method is to mock the API calls - (also called stubbing) - with fake data:

4. How to make and API-mock call

- APIs are called with a middle-ware runner (HTTP-runner) which takes care of the sending of the instruction to the external data base and fetching the response back from the data base.

- Fetch/ Axios calls are set up differently depending on the way the HTTP runner works.
- For Axios set up see Tute: Net Ninja: [https://www.youtube.com/watch?v=TBZy-Rc-xX0&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&index=13]

Example mock: Net Ninja - GitHub file [https://github.com/harblaith7/React-Testing-Library-Net-Ninja/blob/main/src/__mocks__/axios.js]

Step 1:

- create a new _mocks_ folder

Step 2:

- Log the API data to see its shape in the google console

Step3:

- create a `.json` object that matches the shape of the api-data (exactly - check for trailing spaces/ typos and case-sensitivity of the key-value of each object)

Step4:

- import the mocks file into the test file

Step5:

- use the mock methods in the library of choice `jest.mock()`
- configure the behaviour of the mocked service
