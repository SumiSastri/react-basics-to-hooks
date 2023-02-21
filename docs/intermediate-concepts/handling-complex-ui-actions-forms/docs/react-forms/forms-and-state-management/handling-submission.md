Submitting form values is closely coupled with the value and the user updates. Once the user updates the inputs these inputs need to be submitted to the back-end infrastructure.

State is ephemeral as we have seen especially in forms.

The form value starts as null, the user updates it, a call back function sets the new value and binds it to state and now this state has to be captured and submitted.

The default behaviour  of a button which is set as type of `submit` as an attribute in the JSX is to submit the data immediately and therefore this ephemeral data is lost.

For the data to persist, we first need to prevent this default behaviour with a `event.preventDefault()` call back set in the submit handler function.

The second part is to capture this data and submit it. This can be done as a test by logging the data captured.

To persist the data further, the `console.log()` is replaced by a custom function to capture the form data stored in the value of the input.

__Hooks__

With hooks, the submit function uses a boolean value which initially is set to false.
The default behaviour is prevent with the `event.preventDefault()` method
The submit value is not set to true once the data is captured
The value of the input is captured with either a `console.log()` to check functionality or persisted further with a custom function

```
const [submitted, setSubmitted] = useState(false)
const handleSubmit = (event) => {
  event.preventDefault();
  setSubmitted(true)
  // console.log(userName, emailInput, passwordInput)
  history.push("/hooks-personal-details")
}
```

__Stateful components__