
__Validation using functional programming__

Technically, neither a form library like Formik, nor a validation library like Yup are essentials.

Using functional components and functional programming in JavaScript you can write your own validation for very small applications and side projects.

Let us demonstrate with an example.

In this case the business logic is that the field that captures the user name is required. 
If the field has no values then an empty errors object `formInputErrors{}` is returned.

A utility function can be written and the module exported to wherever the user name is captured.

```
export default function validateUserNames(values) {
	let formInputErrors = {};		
	if (!values.userName) {
		formInputErrors.userName = 'Username is required';
	} 

	return formInputErrors;
}
```

This function is now ready to be imported into the React component requiring validation.

__Managing local state of a React form during the validation process__

The next consideration is the local state of the form in React.

The form input is updated with a `handleChange` event that updates the event's target value.

Help text under a label outlines to the user the business expectations of a field. For example, if a password requires 10 characters, an Upper and Lower Case alphabet a numeral and a symbol, help text outlining these requirements provides a good user experience. 

Dynamic validation can be triggered at this point while the user is inputting incorrect information. Then when an error is displayed it identifies why the expecation has not been met.

To execute this call-back function that displays the errors, the function that has imported the business logic of the validation must be called in the `handleSubmit` function triggered `onClick` of the submit button.

The custom validation function that has been written and imported into the React Component is reassigned to local state of errors in the React Component after the form payload has been created and is ready for submission. By reassignment the validation errors become the local errors in the React Component.

 ` const [inputErrors, setInputErrors] = useState({})` This hook identifies the local errors of the component 

In the `onSubmit` handler the reassignment takes place at the point where the form payload is created.

  ```
  const formErrors = validateUserNames(createUserName);  
  setInputErrors(formErrors);
 ```

The form error now calls the validation error which is triggered when the submit button is clicked and the payload has invalid fields - in this case a field that is required is missing.

Finally, the Component's `render()` method displays the the validation error when the payload is created and renders the error messages in the custom function written.

In the component props we see the `onChange` handler at work and the local state of errors `inputErrors` which now is a new chained object ```inputErrors.userName``` as the reassigned function data is passed by reference to the local state of errors. If there are errors and this is true then the error message is displayed - in this case when the user clicks submit but fails to submit the required user name field.

```
 <FormInput
          className='inpt-2l'
          label='User Name'
          helptext="Please enter your preferred user name"
          type='text'
          name='userName'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {inputErrors.userName ?
          <p className="danger">{inputErrors.userName}</p>
          : null}
```          

__Debugging the call backs__

With so many error objects and all this reassignment debugging where the code has gone wrong can be executed with 2 `console.log()` methods to identify where the code error is occuring.

1) In the function writtent with the business logic
```
export default function validateUserNames(values) {
	let formInputErrors = {};	
	console.log(values,'CHECK BUSINESS LOGIC: Errors if logic fails')
 ```
2) In the `onSubmit` handler
```
  const formErrors = validateUserNames(createUserName);
    setInputErrors(formErrors);
    console.log(formErrors,"CHECK LOCAL STATE ERRORS: reassignment of business logic errors")
```
__Form validation happy path__

If you wish to provide the user with additional information that their submission has been successfull, the first step is to set the local state of validaiton in the form as a boolean value. 
`const [validated, setValidated] = useState(false);`

In the `onSubmit` handler, deconstruct the global Object constructor into its keys for the error you want to check - in this case the `formErrors` - which represents the reassignment of the validation errors that have been written as an utility function and imported into the local React component. This will return an array of errors and if that error array is empty then the length of the array will be at index 0. Once this has been establised then the validation is successful and can be set to true. 

As validation is triggered with the submission is successful, the local state of the submission also needs to be set as a boolean value 
`  const [submitted, setSubmitted] = useState(false);`

Once the submit button has been clicked and the validation is successfull the boolean values can be changed.

```
if (Object.keys(formErrors).length === 0) {
      setValidated(true)
      setSubmitted(true)
    } else {
      setValidated(false)
    }
```

To render a success message the double boolean values of validated and submitted must be true and a custom message on the form page can be rendered

```
      {validated && submitted ? <SubmitFormSuccess /> : null}
```      

In a multi-part form if you want to render this on a separate page, routing is required the history object can be used with the `push()` method chained on.