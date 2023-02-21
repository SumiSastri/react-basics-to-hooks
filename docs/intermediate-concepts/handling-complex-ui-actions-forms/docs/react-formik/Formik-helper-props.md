__Submission__

`isSubmitting()` - can be used to disable the `onSubmit()` button from responding to the function call till submission complete with no errors and all fields validated
`setSubmitting(boolean)` - sets form submitting state and can be switched from true to false in the onSubmit to ensure submission is only true when validation and errors are handled async calls with sync calls (hardcoded data) `setSubmitting(false)` has to be done manually and then reset to true when submission complete, with async calls Formik handles it

The `handleSubmit` for an async call syntax
```
handleSubmit = (values, actions) => {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
         resolve()
         <!-- check values -->
         alert(JSON.stringify(values))
     }, 5000)
    });
}
```

__Validation__

`isValid(boolean)` - checks against the schema of the valdiation (or the function for validation)
`isValdating()` - sets the valdation state useful for async calls where data is being fetched and validated