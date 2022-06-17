Documentation: https://testing-library.com/docs/

The test library (2021) now has a `render()` method that renders the component - more efficient in the code run and compile than test-renderer

In the describe method the component renders with all the initial values as an empty object

```
describe("MyComponent", () => {
const myComponentVariable= (
<MyComponent
initialValues={{
        prop1='I am a string',
        prop2= false,
        prop3= 1234,
        prop5 = () => {}
      }}
setInitialValues={() => {}}
/>
);
```

The test blocks then dive deeper into the component's individual testable units

```
 it("tests abc", async () => {
    const { container, getByText /*other props in the library*/ } = render(myComponentVaribale);
    <!-- this is when initial values are re-rendered after initial empty render of component -->
    expect(getByText("I am a string")).toBeInTheDocument();

<!-- Await block with async and method findBy rather than getBy  -->

    const someHTMLElement = await screen.findByTestId(`abcd123`)
        expect(someHTMLElement).toBeInTheDocument();
```