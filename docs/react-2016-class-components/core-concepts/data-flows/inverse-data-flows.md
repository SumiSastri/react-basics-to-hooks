Data in a React application flows from parent to child. We say that data flows down. React uses one-way data-binding.

Take the case of events, which intrinsincally flow up (event bubbling). This is inverse data-flow and we need to bind the flow to the parent. This is what we mean by React uses one-way data binding.

The benefit of one-way data binding is that it makes data flow explicit, which makes it easier to test and reason about your application. T

he way we update our state in a React application is by using callback functions. In summary, components pass props to their children. And functions called in those children set the state inside of the parent component. This then causes that new data to be passed down to subcomponents as props.
