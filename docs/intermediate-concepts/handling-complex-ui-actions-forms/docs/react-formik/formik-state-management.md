- Initial values of state set - these values are a `.json` 
- Name/ values -> attributes each must be unique per field so that the call back `onChange` event handler fires and updates state
- Validation business logic set and schema from Yup set
- Validation logic executed as outlined by Yup schema
`validate = ({values, props}) => {// do something to validate}`
- Errors triggered
- Errors rendered
- Conditional submission based on valdiation and no errors set 
- Submission of form fields
`onSubmit ({ values, actions}) => { // submit payload validated, no errors, data posted, navigation to next step where relevant}`
- Fields reset to initial values