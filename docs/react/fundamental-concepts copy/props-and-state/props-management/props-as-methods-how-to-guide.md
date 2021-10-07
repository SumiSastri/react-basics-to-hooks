**How to use methods as props?**

When a child component wants to communicate to a parent component we use methods as props

1. Create a functional child component

2. Create parent component (either with hooks or class component)

- Import the child component to connect parent to child
- In state add data that you want displayed in the child component
- With React 2016 use state with or without a constructor depending on the use case and update state with the ```setState()``` method
- With React 2019 ```useState()``` method from Hooks
- Write functions where behaviour changes required - in the counter example the counter increments by a random number, one etc.,

**See ```App2.js``` demo**

- In the render method create attributes/ props for the child component they can take any name

3. If the child components props need methods pass methods into the prop, or if the child component needs primitive data - strings, numbers, pass these into the prop.

4. Import the props and destructure them in the child component. The parent component executes the function, the function is invoked in the child component.

5. If you do not destructure then

- Pass props as a param of the function
- pass the prop and the defined method into the jsx that you want the method to be displayed in

**See Button2.js & Display.js for a demo on destructuring**

6. Remember props are immutable therefore if you set these variables in the child component they will be rendered in all modules where the parent component is exported. Therefore use a reusable function 
see the difference between ```App1.js``` and ```App2.js```