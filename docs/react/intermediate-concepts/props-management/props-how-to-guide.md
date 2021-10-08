# HOW-TO-GUIDE WITH PROPS

Useful YouTube Tutorials:
Code Evolution: https://www.youtube.com/watch?v=m7OWXtbiXX8

## HOW TO CREATE PROPS WITH FUNCTIONAL COMPONENTS

Props are additional properties that a component can have to pass data from one component to another

**Step1**

Create the child component (COMPONENT DEFINITION)
`<Component/>`

**Step2**
Create the parent component - import the child component into the parent - this connects the two components and enables the data flow from parent to child.

```
import Component from "./ filepath"

export const Parent = ({props}) => {
return (
    <div>
<Component/>
</div>
    )
}
```

**Step3**
In the parent component use the child component and set attributes which become the props object passed down to the child component.

The creating of attributes in the parent component enables the passing of these key-value pairs down to the child as the props object.

```
export const Parent = ({props}) => {
return (
<Component
prop1={prop1: string}
prop2={prop2: boolean}
prop3={prop3: array}
prop4={prop4: method}
/>
)
}
```

**Step4**
Pass the properties from the parent component to the child component - these can be strings, numbers,booleans, arrays, methods.

If it is a method, write a named function. Pass the name of the function into the attribute you have created.

Note props are assigned therefore a single equals sign.

Example 1: COMPONENT DEFINITION

```
export const Component = ({prop1, prop2, prop3, prop4}) => {
return (
<Component
prop1={prop1: string}
prop2={prop2: boolean}
prop3={prop3: array}
prop4={prop4: method}
/>
)
}
```

Example 2:

```

const add = (a,b ) => a+b
const travelLocation = { country: "Spain", city: "Madrid"}
const travelLocationChoices = [ 'Spain', 'Portugal', 'France']

<Display displayText="Hello" displayNumber={8} displayMethod={Math.random() executeAddMethod={add} displayTravelLocation={travelLocation.country} displayTravelLocationChoices={[0,1,2]}}>

```

**Step5**
Destructure the properties in the child component and render them depending on the use case.

Example 1 (COMPONENT USE - CALLING THE COMPONENT)

USE CASE 1

```
<Container1>
<Component
prop1='I am a list of numbers'
prop2={false}
prop3={[1,2, 3, 4]}
prop4={add2 = (a,b) => a + b}
/>
</Container1>
```

USE CASE 2 - props now change based on this use case

```
<Container2>
<Component
prop1='I am a shopping list'
prop2={true}
prop3={['apples,'oranges', 'pears']}
prop4={multiply3 = (x,y, z) => x _ y _ z}
/>
</Container2>

```

Example 2:

```
({displayText, displayNumber, displayMethod, executeAddMethod, displayTravelLocation, displayTravelLocationChoices})

```
