1. Mock data
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

4. Mock API calls (also called stubbing)

5. Mock events - If you want to simulate change
   Example:
   `fireEvent.onChange(elementName, {target: {value:'Change me'}})`
