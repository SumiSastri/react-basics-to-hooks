## Formik

This doc outlines the advantages between React Forms or controlled components vs Formik as a library used to build forms.

**Documentation**[https://formik.org/docs/overview]

**Formik disadvantages**

NOTE Formik has no long term support as of 2022.

**Formik advantages**

Jared Palmer Taming Forms in React [https://formik.org/docs/overview]

The video above is useful as it says you do not need to use Formik for all forms. You can use a mix of React forms and Formik - do whatever is least awkward.

Formik is not a silver bullet for form state-management it is merely a tool. It uses Hooks to plug into the React library (useFormik Hook)

- Good community - over 1-mil users
- Scalable, easy form-builder (internationalisation)
- Testing
- Integrates well with validation with Yup

- Manages form data - `useFormik({})` with the hook that takes the values of initial state

- Form submission - `formik.submit()` has a method that handles submit, writes the event prevent default method and logs the form values (which is it's main argument) to the console. You can then write methods to direct the information to the right api. The method tracks the most updated value of the input

* More about the handleSubmit helper function in the documentation[https://formik.org/docs/guides/form-submission]

* Async submission [https://formik.org/docs/examples/async-submission]

- Form validation - `formik.validate()` validation object takes the values field as its main argument and logic can be written to validate each field

* More on validation from the documentation [https://formik.org/docs/guides/validation]

- Error message display - `formik.errors()` tightly coupled with validation and the error message can be displayed with conditional rendering

- Reducing boiler plate - `formik.values()` is tightly coupled with the name and `onChange` JSX attributes.

- Reducing boiler plate with the `formik.getFieldProps()` method - replaces the name,
  value, onChange, onBlur props

- Tracks changes with the `formik.touched()` method which tracks the first interaction with the input field the method is called on the first keystroke in the input field

- Animations - `formik.onBlur()` a method that adds css animation it is tightly coupled with the `formik.touched()` method if a field has been visited the `formik.onBlur()` method is called

- Uses known React Library methods

**renderProps() Method**

This is essentially a React Library method
Documentation[https://reactjs.org/docs/render-props.html]

1. Uses a function as a prop that is passed from parent to child
2. Called `renderProps()` as a method but the actual prop can be named anything - eg. children, render, show, display etc.,
3. Link it to Formik by passing in props as an arg to the function

- Has higher order components as reusable Formik form components

**Resources**

- Sandbox

```
https://codesandbox.io/s/zKrK5YLDZ
```

Official Tutorial[https://formik.org/docs/tutorial]
Code for tutorial[https://codesandbox.io/s/formik-v2-tutorial-final-ge1pt]
CodeEvolution React-Formik[https://www.youtube.com/watch?v=Yw27J-AFlk0&ab_channel=Codevolution]
Plural Sight: [https://app.pluralsight.com/library/courses/react-implementing-forms/table-of-contents]
