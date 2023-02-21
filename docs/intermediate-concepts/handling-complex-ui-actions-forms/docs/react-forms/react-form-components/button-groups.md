**Buttons**

It may not be useful to create custom button components
If you do props of type need to be added eg: `type:{type}` where the type declaration is a string and the value can be one of three options - button, reset and submit.

**Radio Groups**

In terms of ui-ux radio buttons give you the option to select one from a group of options. It is not different from a select drop-down when you create a custom component. It is better for screen readers than a select filter

The JSX tags are
`<label/>`- for (innerText) attribute is forHTML in React
`<input/>` - each input must have a unique id attribute and a checked atttribute which is a boolean value

Mapping happends through both the label and input and for multi-JSX mapping a ReactFragment must be used or a div.

The data is structured in an array but each element is a string.

**Checkbox**

In terms of ui-ux a check box is like a toggle button give you the option toggle a yes/no and this is in its single select form. With a check box, often a toggle button designed so that the selector is animated is often more popular.

In a multi-select version it allows as many boxes to be checked as the user requires. It is best to use a checkbox for a single yes/ no requirement and radio buttons where multiple selections are required as the screen reader will read out the label and if the button is checked.

**Counters**
Increment buttons
Decrement buttons
Totalisers - provide the result of the the increments and decrements
