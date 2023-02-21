`import { useHistory } from "react-router-dom";`
importing the history object from React-Router into a module gives you access to the methods available in this object.

It helps navigation and routing. The state of the page is stored and you can go backwards and forwards using the history object methods or change a route.

egs:
`history.push("/blogs");`
`history.go("-1");`
`history.back()`
