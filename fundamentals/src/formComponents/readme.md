## React forms vs. HTML

Forms in HTML hold state and inputs are rendered immediately. In React state is held in class-based components.

When the user changes the input of the form input field, the state of the JSX element changes and this needs to be captured. This is where you write your `this.state.inputValue` which is the initial state of the JSX element.

Bespoke methods are written - for example `handleInputChange()` which captures every key-stroke in the input and sets the new state of the input in the value field.

This user event (changes to state) is captured with a synthetic `event.target.value` which captures the changing values of the JSX element. State is now reset with the `setState()` method in the callback function of the `handleInputChange` to the change event in the JSX element's (the target) value attribute.

This is sent back to the state object and state is updated on the input change.
