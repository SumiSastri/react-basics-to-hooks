Validation of form fields and error handling are closely coupled.

Each form field will have its own validation requirements. To set up errors you first have to determine what will throw an error and why.

For example - your validation for a text field may need the field to have 10 characters, another text field may need to have validation of 10 characters and no symbols, yet another field may require no validation  at all - therefore every field needs to be validated in an unique manner.

Once the validation rules are set, if these rules are not met an error gets thrown. This error therefore is tightly coupled with the `onChange` handlers in the form and the `onSubmit` handlers. When there is an error in an input the error must be displayed and the form should not submit any fields.

Validation can be done with the help of libraries or with custom functions.
Errors are conditionally rendered if there is a validation error.

Validation triggers therefore are at the point of input as well as the point of submission.

1. Determine the business logic - does the form field need to eliminate spaces, have only upper case letters, be only 100 characters, etc.

2. Write a custom function to execute the validation logic

3. Call the function in the `onChange` or `onSubmit` handlers or both depending on the ui-ux requirement

4. Conditionally render the error message for each field if there is an error. The error message is set on the state object