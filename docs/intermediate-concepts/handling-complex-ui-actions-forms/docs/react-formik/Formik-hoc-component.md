## Reusable Formik components

This doc outlines some of the reusable components shipped with the Formik library.

A higher order component (HoC) returns the `<Formik>` container with its props and methods. It is an HoC created with the `useContext` Hook.

**Formik**

Top level HoC and its props. It is like the brain that controls the functioning of the rest of the child props. The three key functions are to keep track of validation, maintain the initial state of the component and submit validated and updated fields.

The most important attribute in Formik is the name attribute - it works like and id and each name must be unique to the field so that the `onChange`, `onBlur` work.

The name is tightly coupled to values, touched, dirty and errors methods in the library.


```
<Formik
		initialValues={formValues || initialValues}
		<!-- json object all fields must be initialised otherwise an error is thrown
		with the warning that the form can not be changed from a controlled
		to an uncontrolled form -->

		validationSchema={validationSchema}
		<!-- validation function and params 
validate = ({values, props}) => {// do something to validate} -->
		
		onSubmit={onSubmit}>
<!-- submission function and params
onSubmit= {(values, actions)} => {// submit payload validated, no errors, data posted, navigation to next step where relevant}	-->
>

<!-- render the Formik HOC props (initialValues, validation, onSubmit) -->
{props => (
<Form>
<Field/>
</Form>
</Formik>
)}
```

**Form**

The `<Form/>` component that ships with Formik replaces the `<form/>` JSX tag and has an implicit `onSubmit` wrapped in the top-level Hoc `<Formik>`

It is a wrapper that takes care of the submission of form values and resetting of input fields on submission.

**Field**

1. The HOC `<Formik>` renders a `<Field/>` tag which is the equivalant of the JSX `<input/>` tag
2. Name attribute of the `<Field/>` element is linked to the form `state`
3. The name and value attributes are tightly coupled and inbuilt `handleChange()`and `handleBlur()` methods ship with the library
4. You can still pass in custom attributes in the `<Field/>` element - like id, placeholder, etc.,

**FieldArray**

- Helps with list manipulation
- Uses the `renderProps()` method to return a function that renders the children of this HoC
- This function automatically gets props that help return the JSX of the elements of the array dynamically
- Convention of naming the props of this function is `fieldArrayProps()` if you log these props in the console you will see the methods and values available in this props object
- There are also the Formik form object to use methods from this object - here are the values property to track the values as they change
- Rendering an array of elements with this HoC - This is good for adding and removing items in a shopping cart

**Fast Fields**

- Use if more than 30 fields in a form
- Used for optimisation
- Re-renders only once - only few instances when it re-renders
- Field has to be independent of other fields in rendering
- Also good for complex validation
- Documentation says use with caution

**Error Message**

The `<Error Message/>` is tightly coupled with the `<Field/>` element and tracks validation of the field according to business logic set in validation files.