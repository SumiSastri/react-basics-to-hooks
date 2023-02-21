## Formik 

This doc outlines the how to validate Formik forms with the Formik validate method.

__Handling Validation of the Form HoC__
Documentation[https://formik.org/docs/guides/validation]
Reading: Smash Magazine [https://www.smashingmagazine.com/2020/10/react-validation-formik-yup/]
Nested objects code sandbox [https://codesandbox.io/s/loving-liskov-7icmo]


Validation at a top level with the Form HoC is also possible with 2 methods using the ```renderProps()``` method on the Form HoC.

The props that the Form HoC receives are destructured and JSX tags returned.

```
<Formik>{ (props) => {return(<Form/>}) }</Formik>
```

Log the props in the console to see what props you have access to

- `validateForm()` the method is triggered when the user types in a value to the form (touched) and then `onBlur()` when the user moves awaty from the input with incorrect values (dirty) and finally `onSubmit()` validation logic is checked again against the payload to be submitted
- Submission fails if fields are not validated - this happens automatically with the ```isValid()``` method, if the errors object is empty, the method is set to true, it allows you to see if there are errors at any point of form submission
- the ```validateOnMount()``` validates on mount (set to false by default) - therefore unmounted notes (table rows) may not be validated at form level and will need field-level custom validation, initial values are reviewed and validated according to the business logic as well (for eg: fields that are not mandatory will be parsed and submitted)

__Field level custom validation__

The `validateField(fieldName)` method can be used to custom validate fields. - Validation can happen at the field level with custom functions - here return undefined not null as it could result in unexpected bugs.

```
const validatePhoneNumbers = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};
```

__Async validation using API-calls__

`isValidating()` - this method ensures redundant validation during an API-call is avoided