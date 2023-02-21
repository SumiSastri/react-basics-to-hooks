Input fields are the most commonly used - for text/ search filters/ emails/ passwords / checkboxes,drop-down filters and even filesessential use the basic `<input>` jsx.

**Steps to create a reusable component for inputs**

1. Input feilds are used to capture user inputs, the JSX is an `<input>`tag that accepts props

2. Import the react library and create a functional component with an `<input>`tag and make a list of all the props you will require.

3. Prop types adds a simple type-validation for the reusable component - these are in alphabetical order

4. Import this component into the form that you require it to be used in and populate props bespoke to the needs of the form in question.

**Types of inputs**

In the type prop you can use the string values - text, password, email, file
You can also use the boolean values - checked, required
If you use the number value you will need to change it into a string value in the change handler or in the `useState` hook as the value expected in a form is always a string
