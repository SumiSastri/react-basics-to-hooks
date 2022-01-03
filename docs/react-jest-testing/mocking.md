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

4. Mock API calls (also called stubbing) - Why mock?

- API calls are expensive
- Calls are slow
- Testing calls are short and frequent and devs need fast response to check features that are local not external

5. Mock events - If you want to simulate change
   Example:
   `fireEvent.onChange(elementName, {target: {value:'Change me'}})`
