# React a short history

The purpose of this document is to give you a quick overview of how the React Component Library was started and how it is currently maintained.

React apps are just collections of modular components that render their output based on passed in properties (`props`) and changes in any underlying data (`state`).

It takes the data-layer that JavaScript interacts with in the DOM (document object model) and abstracts it into a virtual-DOM. This makes changing application state in the data-layer more cost and time efficient.

Direct interaction of JavaScript with the DOM is slow and costly. Earlier libraries like j-query are the forerunners of React. They continued to interact directly with the DOM but abstracted some functions before injecting the code back into the DOM.

React, Vue and other libraries/ frameworks take this level of data-abstraction in programming one step further by creating a virtual-DOM and injecting changes in one single node - the root of the app.

These applications are referred to as SPAs, or single-page-applications.

**References** Plural Sight: React the Big Picture : Cory House

**TimeLine**
2011 - Front-end JavaScript library created by Facebook for user interfaces
2012 - Used on Instagram
2013 - Made open source to the developer community
2014 - Rate of adoption increases by large companie because it helps in scaling apps quickly and efficiently.
2015 - React Native released
2016 - React 15 released
2019 - React Hooks React 16.8
2022 - Continously maintained and updated see latest version `("react": "^17.0.2",)` in docs.

Documentation: [https://reactjs.org/docs]

Note: React is a library not an application (App)
