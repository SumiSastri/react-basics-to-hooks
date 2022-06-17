**Higher Order Components**

A higher-order component (HOC) is not part of the React API. It is a React design pattern the HOC take a function that takes a component adds additional functionality and returns a new component.

HOC's are used when the component needs to subscribe to an external source of data.
HOCs do not modify the input component, nor does it use inheritance to copy its behavior. Rather, a HOC composes the original component by wrapping it in a container component. A HOC is a pure function with zero side-effects.

The wrapped component receives all the props of the container, along with a new prop, data, which it uses to render its output. The HOC isn’t concerned with how or why the data is used, and the wrapped component isn’t concerned with where the data came from.

This may be useful if you change data-fetching libraries, for example.

Documentation [https://reactjs.org/docs/higher-order-components.html#:~:text=A%20higher%2Dorder%20component%20(HOC,and%20returns%20a%20new%20component.]

