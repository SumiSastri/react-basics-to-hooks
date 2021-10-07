# HOW-TO-GUIDE WITH PROPS

## HOW TO CREATE PROPS WITH FUNCTIONAL COMPONENTS

**Step1**
Create the child component.

**Step2**
Create the parent component - import the child component into the parent - this connects the two components and enables the data flow from parent to child.

**Step3**
In the parent component use the child component and set attributes which become the props object passed down to the child component. 

The creating of attributes in the parent component enables the passing of these key-value pairs down to the child as the props object.

**Step4**
Pass the properties from the parent component to the child component - these can be strings, booleans, arrays, methods.

If it is a method, write a named function. Pass the name of the function into the attribute you have created.


```
const add = (a,b ) => a+b
const travelLocation = { country: "Spain", city: "Madrid"}
const travelLocationChoices = [ 'Spain', 'Portugal', 'France']

<Display displayText="Hello" displayNumber={8} displayMethod={Math.random() executeAddMethod={add} displayTravelLocation={travelLocation.country} displayTravelLocationChoices={[0,1,2]}}>

```
**Step5**
Destructure the properties in the child component and render them depending on the use case.

```
({displayText, displayNumber, displayMethod, executeAddMethod, displayTravelLocation, displayTravelLocationChoices})
```
