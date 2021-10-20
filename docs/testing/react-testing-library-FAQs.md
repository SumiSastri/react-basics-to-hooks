1. What is the difference between these methods?
   `getBy()`- only one element `getAllBy()` or an error returns an array of all the elements (used most of the time)
   `findBy()` - returns element or error and can be used with async JavaScript - used with async API calls
   `queryBy()` - returns null/ empty array rather than an error - shows that the component does not exist on a page

2. Boolean assertions

`.toBeTruthy()` - ensure a value is true in a boolean context
`.toBeFalsy()` - these are the falsy values accepted - false, 0, empty string, null, undefined, not a number(NaN)
`.toBeNull()` - deliberately set to render nothing

3. Show and hide assertions

`.toBeInDocument()` - an element can be in a document but can be invisible
`.toBeVisible()` - this asserts that the element is also visible, if not visible does not mean it is not in the document - it may be invisible due to conditional rendering

4. Inner content of elements

`.toContain(3)` - any data
`.toContainHTML("h3")` - elemment
`.toHaveTextContent('I am a string')` - string

5. Set up and clean up
   `beforeAll()` - runs once before all tests
   `beforeEach()` - good for iterations (mapping)
   `afterEach()` - good for clean up (dismounting component)
   `afterAll()` - runs once after all tests
   Net Ninja: [https://www.youtube.com/watch?v=MtiQMhzjQrY&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&index=14]

6. Two methods for event handling
   `fireEvent()`
   eg: If you want to simulate change `fireEvent.onChange(elementName, {target: {value:'Change me'}})`
   `userEvent()`
   eg: Screen object is good if you can't find an element and need to display an error message by an alert message `userEvent.type(screen.findByRole("alert", "There is an error"))`
