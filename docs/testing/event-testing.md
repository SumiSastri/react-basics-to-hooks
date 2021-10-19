From Testing React Components - Plural Sight (Liam McLennan)
Documentation: https://testing-library.com/docs/

Net Ninja: https://www.youtube.com/watch?v=7dTTFW7yACQ

Event testing in three steps - not as straight forward as testing components as they are invocations of prop functions. You may need mock objects or to render a mock element in the test.

1. Render the component you want to test
2. Find the element that an event needs to be tested and assign it to a variable - use query methods in the testing library - `findByprops({'name': 'value'})` may need to be used with nested components/ or a data-testid. You may need simulate the change `props.onChange({target: value'Change me'})` by explicitly changing the event's target value.
3. Use the fireEvent.event.(variable name of the element)
