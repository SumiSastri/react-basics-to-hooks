Net Ninja tutorial[https://www.youtube.com/watch?v=3ugQRXRToFA&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&index=8]

GitHub Link: [https://github.com/harblaith7/React-Testing-Library-Net-Ninja/tree/main/src]

1. Routing and Links need mocks
2. Import the router library you are using into the test component
3. Create a mock component and assign it to variable - wrap the link you are testing in the router provider - then you can make your assertions against the link

eg:

```
import { BrowserRouter } from "react-router-dom"

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