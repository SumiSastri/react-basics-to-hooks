## How are events handled in React?

In a functional component, the function to call the event is written before the return method and the function is written in as a function in the event attribute. It is not a function call. If you call the function in the attribute then it renders the call in the console and not in the DOM node.

In a class component, calling and binding events in React follow the same principles of binding call-back functions to the class object they point to as in JavaScript. The `this` key word needs to be bound to the constructor method. If not there are unintended side effects.

There are three ways to do this - explictly bind it in the constructor

```
export class ClassComponentClickEvents extends Component {
  constructor() {
    super();

    this.state = {
      message: "CHANGE ME",
      toggleOn: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
```

ES6 arrow functions bind the lexical this to the function it is calling. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering and is not recommended though it may work.

```
<!-- Syntax with lamda functions not recommended -->
 <button onClick={() => this.handleToggle()}>
          {this.state.ToggleOn ? "Toggle On" : "Toggle Off"}
        </button>

<!-- Syntax when you bind this to the constructor - recommended -->
        <button onClick={this.handleToggle}>
          {this.state.ToggleOn ? "YES?" : "NO!"}
        </button>
```

The better way to use the lambda function and bind `this` is in the function that is written to be passed into the event handler. There are two ways of writing the function. You do not need to bind `this` with the lambda function in the constructor in the second instance, but for the fist you do.

```
 handleToggle() {
    this.setState((state) => ({
     ToggleOn: !state.ToggleOn,
     }));
   }
   <!-- lamda function binds this -->
  handleToggle = () => {
    console.log("this is:", this);
    this.setState((state) => ({
      ToggleOn: !state.ToggleOn,
    }));
  };
  <!-- in the render method remove the lamda function and call the function in the render method like so -->

    <button onClick={this.handleToggle}>
          {this.state.ToggleOn ? "YES?" : "NO!"}
        </button>
```

**Preventing the default behaviour of events:**

The default behaviour of an event is to render the event immediately. To prevent this behaviour the method `e.prevent.default()` is called in React to prevent this behaviour and to get the code to compile in the virtual DOM first. Here `e` or `event` is a synthetic event.
Documentation [https://reactjs.org/docs/handling-events.html]

Additional reading
Refs

- Used to directly access the DOM, I have read through some of the blogs, I am not covering this with examples in this revision of React, perhaps later I will come back to it. I found these blogs useful to read.
  LogRocket[https://blog.logrocket.com/a-guide-to-react-refs/]
  Hackeroon[https://hackernoon.com/refs-in-react-all-you-need-to-know-fb9c9e2aeb81][https://medium.com/@rossbulat/how-to-use-react-refs-4541a7501663]

Portals

- Used to access DOM child nodes for CSS. Once again may come back to them these blogs were useful at this stage to read
  LogRocket [https://blog.logrocket.com/learn-react-portals-by-example/]
  CodeBurst [https://codeburst.io/reacts-portals-in-3-minutes-9b2efb74e9a9]
