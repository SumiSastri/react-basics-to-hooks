The purpose of this documentation is to briefly outline how are events handled in React

__What are DOM events?__

An event is when a user interacts with a page a document-object-model (DOM) event is triggered in the browser. This document covers the most-frequently used events

```
onClick
onChange
onSubmit
onToggle
```

 There are several other events such a more detailed list is in this link from W3 Schools [https://www.w3schools.com/jsref/dom_obj_event.asp]

In a JSX element, as it is JavaScript under the hood, event-handlers or utility functions to outline what happens after the event is fired are available in the React library.

1. Write the function (function declaration)

```
handleClick = () => {}
```

2. Call the function in the JSX handler as a void call back

```
<h1 onClick={() => {handleClick}}/>
```

3. In a class component, the event needs to be bound to the state of the component so when it is called, you use the ```this``` key word. 

```
<h1 onClick={() => {this.handleClick}}/>
```

Class components, the render method is bound to the constructor and you can also deconstruct the ```this``` key word 
in the render method ```const {handleClick} = this.state``` and then return it in the same way as a functional component, if you want to keep code consistent.

```
<h1 onClick={() => {handleClick}}/>
```
4. A toggle can be handled with an ```onClick``` caller rather than an ```onToggle()``` wth the utility function describing the toggle functionality

5. An ```onSubmit``` mainly used to submit a payload needs some special attention - see the section that outlines it later in this document

__Three ways to bind the this key word__

It is useful to know all the ways to bind the ```this``` key word in Class components.

1.  Explictly bind it in the constructor

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
2. The better way is to use the lambda function (an arrow function) for the event handler 

```
 class AppNavbar extends Component {
	state = {
		isToggleOpen: false
	};
	handleToggle = () => {
		this.setState({
			isToggleOpen: !this.state.isToggleOpen
		});
	};

  <!-- in the render method remove the lamda function and call the function in the render method like so
   or deconstruct state const {isToggleOpen} = this.state for the render method   
   -->


    <button onClick={this.handleToggle}>
          {this.state.isToggleOpen ? "YES?" : "NO!"}
        </button>

Preventing the default behaviour of events:
```

3. The lamda or ES6 arrow functions can bind the lexical this to the function it is calling - that is DIRECTLY in the JSX tag. 

However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering and is not recommended though it may work.

```
<!-- Syntax with lamda functions not recommended -->
 <button onClick={() => this.handleToggle()}>
          {this.state.ToggleOn ? "Toggle On" : "Toggle Off"}
        </button>
```        

__On Submit and preventing default behaviour__

The default behaviour of an event is to render the event immediately. To prevent this behaviour the method e.prevent.default() is called in React to prevent this behaviour and to get the code to compile in the virtual DOM first. Here e or event is a synthetic event. Documentation [https://reactjs.org/docs/handling-events.html]

A submit event usually sends the payload of a form from the page to another page, to an abstracted data-store like redux or to the back-end data-base via an API post route.

In forms, the submit handler is written in the form JSX tag as well as the button. The function is declared by first preventing the default behaviour followed by the logic of the function body. 

```
handleSubmit = (event) =>{event.preventDefault(); // do something - submit handler function body}
```
It is then called like any event handler in the JSX tag, with the lexical this key word if it is a Class Component. The default is prevented in the utility function not the function call. Always in a form add the ```onSubmit()``` to the form JSX as well as the button/ other jsx tags clicked, spans, etc; and use ```onSubmit()``` over ```onClick()``` as the method to handle the event.

```
<form onSubmit={handleSubmit}> <button onSubmit={handleSubmit}>
```

