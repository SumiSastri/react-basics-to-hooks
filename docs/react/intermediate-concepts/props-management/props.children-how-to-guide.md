## HOW TO USE THE PROPS.CHILDREN METHOD WITH FUNCTIONAL COMPONENTS

What is props.children?

CodeEvolution is a good tutorial: https://www.youtube.com/watch?v=m7OWXtbiXX8

Children is a reserved key word for the JSX that is rendered within a component - here the `p` & the `icon` tags are child props.

`<Component><div><p><icon></icon></p></div></Component>`

- Children is an inbuild property (param) of every functional component. Where there are no children nothing is rendered.
  `const myComponent = ({children, + other named props created by developer}) => { render(<div>{props.children}<div/>)}`

- Unamed/ unknown props can also be rendered not just the named props with the `props.children` method.

**Step1**
Create a child component

`<Component/>`

**Step2**
Import the child component into 2 different parent components

USE CASE 1

```
<Container1>
<Component/>
</Container1>
```

USE CASE 2 - props now change based on this use case

```
<Container2>
<Component/>
</Container2>

```

**Step3**
Create properties for each of the instances of the child components in each of the parent components

USE CASE 1

```
<Container1>
<Component
prop1='I am a list of numbers'
prop2={false}
prop3={[1,2, 3, 4]}
prop4={add2 = (a,b) => a + b}
><div><p><icon></icon></p></div><Component>
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
><div><button/></div></Component>
</Container2>

```

**Step4**
Go back to the component definition and use `props.children` to render the nested unamed props in USE CASE 1 where the component has been called

COMPONENT DEFINITION

```
export const Component = ({prop1, prop2, prop3, prop4, children}) => {
return (
<Component
prop1={prop1: string}
prop2={prop2: boolean}
prop3={prop3: array}
prop4={prop4: method}
>{props.children}</Component>
)
}
```

**Step5**

Use the spread operator for the rest of the props

```
export const Component = ({...props, children}) => {
return (
<Component
prop1={prop1: string}
prop2={prop2: boolean}
prop3={prop3: array}
prop4={prop4: method}
>{props.children}</Component>
)
}
```
