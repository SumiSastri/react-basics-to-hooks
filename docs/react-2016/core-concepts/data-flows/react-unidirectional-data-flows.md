**What is the meanining of uni-directional data flow in React?**

The fundamental building block for a React app is the component. A combination of components build into a single root component that will be rendered in the browser via a process of component composition. Changes in the root component trickle down through the component tree and cause updates in child components.

From the root component down through the subcomponents, or children, each component's render method may cause other components to render, which may cause other components to render, and so on until the whole UI is rendered. At that point, the React DOM module manages the communication between your root component and the browser DOM. It does this by using something called the virtual DOM.

Data is held in each component of this composed component tree - in both functional and class components. The way that data is passed from component to component is the subject of data-flow.

With the React Component Library data flow is uni-directional. This is one of the most important concepts in React. It means a lot of thought needs to go into the design of React components. These design decisions significantly impacts how you can pass data from one component to another.

While conceptually it is easy to understand, getting to grips with the way data flows determines how you debug code in a commercial app as well as how to plan the set-up of your ui-ux as you build your own side-projects/ organisation's repos.

Data can only flow from a parent component to a child component.

This top-down data-flow means data that needs to be shared by several components need to be lifted to the top of the component tree.

This lifting of data allows data to be passed down as properties of the original component to the nested child components.

A child component can not pass data up to the parent component.

This is also known as one-way binding. Which is explicit, allows more control and is easier to debug.

Two-way binding allows data-flows between parent and child, there is less coding and automatic.

One way-binding provides reliability, clarity and better performance.

Look at the props-and-state-demo folder. Here you will see how a stateful Button component has to be refactored to lift state up the state tree into the App component (Button1.js & Button2.js).

The data then flows from the App component - which is stateful to the Display component and Button2 component via props.

In App2.js you will see the whole flow in one place with ES6, destructuring and React 2019 Hooks.

**Gotchas**
With forms a stateful child component can pass state up to the parent component

The one-way flow is not optimal there are challenges with prop-drilling and prop-tunnelling that result from this data-flow.

See the section on props-management and react-state-management

**Resources**
Tutorials that are useful to follow You Tube videos on React by Code Evolution - Vishwas

[https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=1]
[https://api.github.com/users] LevelUpTuts - Scott
[https://www.youtube.com/watch?v=0qqzUXdGGX4&list=PLLnpHn493BHGTMs2UmaPUG6Lu3dHrqryY]
