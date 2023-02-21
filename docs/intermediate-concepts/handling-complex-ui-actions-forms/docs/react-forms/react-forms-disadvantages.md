**React form disadvantages**

Without libraries like Formik, using React forms comes with some disadvantages

- Verbose code - a lot of boiler plate code
- Poor developer experiences - a lot of grunt work
- Too many call-backs - difficult to debug and monitor
- Error prone/ brittle
- Makes it difficult to scale
- Difficult to read
- Business logic and code intertwined

**Formik**

- auto tracking of form field values, errors, events
- auto call-backs of events onChange, onBlur, onSubmit
- easy to validate and check for errors with Yup as a library/ or even with functional programming (provides sync and async validation for dynamic data-driven forms)
- useful defaults but overrides and customisation possible

**React Hooks forms**

- With `useState` and `useEffect` hooks some of the verbosity of code abstracted
