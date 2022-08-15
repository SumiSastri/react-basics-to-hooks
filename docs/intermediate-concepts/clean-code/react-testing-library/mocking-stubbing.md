1. Mock data

- Should be same shape and names of the data from the API you are calling - mock only data being used for the test

2. Mock functions in some libraries like the jest testing library there are specific methods `jest.function()`

3. Mock components - re-create the component for the page
   Example:

```
const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
          <TodoFooter
            numberOfIncompleteTasks={numberOfIncompleteTasks}
          />
        </BrowserRouter>
    )
}
```
```
const mockFunction = function add2 = (a=1,b=2) => a + b
expect(mockFunction).toBeCalled(1)
let a = 1
let b = 2
expect(mockFunction).toEqual(3)
```
4. Mock API calls (also called stubbing) - Why mock?

- API calls are expensive
- Calls are slow
- Testing calls are short and frequent and devs need fast response to check features that are local not external

Tute: Net Ninja: [https://www.youtube.com/watch?v=TBZy-Rc-xX0&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&index=13]
Example mock: Net Ninja - GitHub file [https://github.com/harblaith7/React-Testing-Library-Net-Ninja/blob/main/src/__mocks__/axios.js]

5. Mock events - If you want to simulate change
   Example:
   `fireEvent.onChange(elementName, {target: {value:'Change me'}})`