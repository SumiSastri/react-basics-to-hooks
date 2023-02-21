User inputs into forms need to be captured and controlled by the React library.

Change handlers are utility functions that are written in React-stateful components. With Hooks, the ```useState``` hook is used to update the value of the input based on event-based typing of inputs into input fields


__Hooks__

The pattern that Hooks follows is to import the ```useState``` hook and to instantiate state in a deconstructed array. Initial state which is usually null, an empty string, an empty array or a boolean value, is the first render. 
```
	const initialState = ''
	const [ userInput, setUserInput ] = useState(initialState);
```
The second render is when the state is set. 

The value and the `onChange` handler sets the value to the change event target value -- i.e. the new information input by the user is the keystroke event, the target is the JSX input tag and the value is the updated prop of the value attribute in the JSX tag.

The `value` and `onChange` attributes are closely coupled so the the JSX tag captures the input change in the ui by setting these values and updating the values within the tag
```
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
```

          
__Stateful components__

The principal is the same with stateful components but the execution is verbose with more steps involved. See the example [src/components/modals/LoginModal.js]

1. The React library is imported and a class component created
2. State is held in an object with all the input values likely to change
3. Initial state is rendered first
4. In the render method, utility functions that update and set state are called in the onChange handler which is tightly coupled with the value of the input field.

```
updateFormInputs = (key, value) => {
		if (key === 'someinput1' || key === 'someinput2') {
			this.setState({ error: null, [key]: value }, () => {
				this.setState({ someinput1: this.state.someinput1, someinput2: this.state.someinput2 });
			});
		} else {
			this.setState({ error: null, [key]: value });
		}
	};
```

5. This handler is called in the onChange attribute when the value changes

```
	value={this.state.someinput1}
	onChange={(event) => this.updateFormInputs('someinput1', event.target.value)}4
```