React has a component based architecture which allows developers to modularise components for reuse. Each component can either contain data (state) or simply render ui-ux. Encapsulating the properties of a component make it easier to reuse code - write once and publish many times.

As React is declarative - therefore component architecture can be created as the React library does the heavy lifting and developers do not need to write several lines of explicit or imperative code to ensure the behaviour of a component is as expected. React updates and renders only the components that change - this abstraction of the code in the library methods allows complex ui to be created quickly and efficiently by development teams.

State-management in each component is a decision that you can make component by component and data (state) can be transferred from one component to another without impacting the modular nature of the component architecture.

State-management is a choice that each developer needs to make once the fundamental concepts of React are mastered. Data is transferred from one component to another via the use of both state and props

This can be done using 

- class components (although as of this update 2022-Sep) this has become a legacy way of looking at managing state in components
- hooks this has become a more normalised way of managing state
- libraries and abstracting state - react-tables/ formik and other such libraries manage state with their own methods making lighter work of state management for these  more complex ui components
- higher order components - the use of providers that wrap functionality around a group of components allowing you to manage state more efficiently
- render props method - this is using methods to transfer data from one component to another via the components props
- routing - state can be transferred from one page to another through routing and routing libraries
- flux-flow with the React-Redux library - storing state by lifting it to a store
- authentication with encrypted tokens in the browser memory (cached)
- refs and forward refs