## Schema-based validation

This doc outlines the advantages of a schema-based validation vs. functions validating form fields and a brief overview of how Yup can be used as a validation library with Formik

__What is schema-based validation?__

A schema is an object which represents the business rules setting out the validation requirements. 

__What are the advantages of schema-based validation?__

If you follow the documentation of functional programming and validation `form-validation-without-libraries.md` there are several steps managing state when you validate a form field.

Boiler plate and bug-ridden, the functional programming method is useful as an excercise to understand how validation works under the hood.

However, the developer experience is poor and schema-based validation takes the grunt work out of validation.

One of the most popular JavaScript validation libraries is Yup and it is widely adopted and used.

Key advantages of schema-based validation are

1. Code is cleaner - less of it and less brittle, less prone to bugs
2. Consistency - checks are repeatable with the same business logic 
3. Concise and readable - makes it easier to maintain code base with multiple developers


## Yup

__Documentation__

Docs: [https://github.com/jquense/yup]
Sandbox: [https://runkit.com/jquense/yup#]

__Advantages of Yup__

1. Integrates easily with Formik - but can also be used with vanilla React/ React-Redux and React-Hooks as well as through the stack with Node.js and lamda functions using TypeScript
2. User community is large and wide, good support and updates for the package
3. Debugging support on stack-overflow
4. Method chaining - makes it concise and readable
5. Conditional validation checks on conditionally rendered fields - using the `when()` method
6. Excellent coverage for most frequently used validation - min/max/required etc.
