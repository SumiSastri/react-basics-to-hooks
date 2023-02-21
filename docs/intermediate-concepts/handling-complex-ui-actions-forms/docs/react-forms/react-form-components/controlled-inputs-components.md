**Why are forms called controlled components**

Forms are different from static display pages as they utilise controlled inputs.

This means the input in the form are controlled by the user not by the programmer.

Therefore state starts as null. It is ephemeral and does not persist unless the user gives you permission to save/ or submit this information.

Components that use controlled inputs are also referred to as controlled components instead of forms. Forms are called controlled components because the React component controls the data (state) of the component.

The functions in these controlled components are event driven - the events most commonly used are:

- click events
- blur events - used to capture validation errors
- submit events which are click events that perform the action of submitting the form data

Data that the key components use is defined or initialised in `state` - in the case of class components this is in a stateful component. With react hooks it is the component that calls the data from an API and displays this on a page.

Forms then interact with this API-call and change other components reliant on this component. The 2 ways that data is rendered is via mutations of state or using methods in the props object of a component.

As input state is initially null, when a user updates this state with an input, the React component controlls what happens to this data with a call-back function that updates state and then submits this updated state further downstream - the whole process of capturing, updating and submitting data is controlled by the form therefore it is known as a controlled component as it controls all operations on the page.

It differs from other components in the sense that the inputs are dynamic and constantly changing - driven by what users input into the forms.

Display components - merely render and display information and have no user inputs always behave in the same way and there is no continous dynamic update of data on the component. State therefore is not controlled by the component, merely displayed.

State-management, therefore, needs more thought with controlled components. Forms are also a security challenge - they are the first point of call for a hack-attack.

Forms extract user information and submit this information to a database/ other downstream systems.

State changes with every keystroke of the user. It is like one large uncontrolled component with no user information until the user decides to give us this information.

Data is prone to errors, can be left out or forgotten, users may need to continue some other task and come back to filling forms. It is one of the least liked aspects of using an app.

Therefore managing state is important and comes back to the point that state is ephemeral in forms.
