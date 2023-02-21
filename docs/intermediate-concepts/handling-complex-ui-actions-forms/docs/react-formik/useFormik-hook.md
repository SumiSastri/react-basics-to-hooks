The `useFormik()` hook is just a custom hook that returns the state of the form page as well as all the helper methods with it.

It is not an HOC and therefore the children of `<Formik/>` which are `<Field/>`, `<FastField>` etc., will not work.

`.touched()` method is a boolean triggered on keystroke within the field and tells us which fields have been visited eg: logged to console `formik.touched method - visited fields {name: true}`

The name, values and event handlers are all tightly coupled and can be replaced by the `getFieldProps()` method eg: `{...formik.getFieldProps('email')}` and refactors and handles all of the other field props for example here with the email as the input it replaces these fields by spreading the values/ methods with this method.
```
// name={formik.name.email}
// value={formik.values.email}
// onChange={formik.handleChange}
// onBlur={formik.handleBlur}
```                    
The demo is in the component `FormikHookYup` and the code shows the key methods available in the library.