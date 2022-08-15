From Testing React Components - Plural Sight (Liam McLennan)
Documentation: https://testing-library.com/docs/

-Another library in the eco system for testing with 2 frequently used methods `act()` and `reactTestUtilities()` - traverses the DOM manually not a great dev-user experience

- Facilities for rendering components, using a virtual browser environment, mocking components that you want to exclude from your test and triggering Events with the `act()` method - wrapper for component rendering and updating operations

- The `act(()) =>{ReactDOM.render(<Jsx Element/>, container); )};` method is a call-back function that renders a container - note that container has to be explicitly called and then defined and assigned to a variable to be used `const JsXElement = container.querySelector('JsxElement');` then you can dispatch events with the method `act(() => JsXElement.dispatchEvent(new Event('event',{bubbles:true})));` you need to import the `ReactDOM` method from the react-dom library to render the component.

- It is not a very good API the `act()` method is there to make the test function properly. It does not communicate anything about what we're trying to test. It's purely incidental and the thing that is required due to implementation details, it makes the test harder to read. There are many other functions available in test utilities.

- `ReactRestUtils()` is another method in react-dom/test-utils library. To use it you need to run `beforeEach()` and `afterEach()` methods to mount and unmount the component. The act method as described above then is chained to the object and renders the element you wish to sest `ReactTestUtils.act(() =>{})`

REWATCH: how to test a select filter [https://app.pluralsight.com/course-player?clipId=dff22545-2af9-4a2a-807f-bfc30d5209d3]