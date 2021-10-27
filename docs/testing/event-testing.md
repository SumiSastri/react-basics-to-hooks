From Testing React Components - Plural Sight (Liam McLennan)
Documentation: https://testing-library.com/docs/

Net Ninja: [https://www.youtube.com/watch?v=0Y11K7KSC80&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&index=10]

Event testing in three steps - not as straight forward as testing components as they are invocations of prop functions. You may need mock objects or to render a mock element in the test.

1. Render the component you want to test
2. Find the element that an event needs to be tested and assign it to a variable - use query methods in the testing library - `findByprops({'name': 'value'})` may need to be used with nested components/ or a data-testid. You may need simulate the change `props.onChange({target: {value:'Change me'}})` by explicitly changing the event's target value.
3. The element may be empty (inputs usually are) you can identify them with the `getByPlaceholderText('/placeholder text/i')` or `getByDisplayValueText()` if there is text displayed in the inner-HTML of the JSX element
4. Use the fireEvent.event.(variable name of the element)

If you want to simulate change `fireEvent.onChange(elementName, {target: {value:'Change me'}})`

**Gotchas:** In forms where there are several events on the page or conditional rendering variable declaration is not hoisted, the element appears after the event is fired therefore you need to look at the sequence of events and declare each variable required for the selection of the element after the conditional rendering is complete.

To submit data on a form the event is `fireEvent.submit()`
