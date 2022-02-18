# React Components - an introduction

The purpose of this documentation is to introduce the concept of the modular Component-based structure of a React-Library, what a functional and class-based component are.

To be read with `functional-components.md`, `class-components.md`, `when-to-use-functional-vs-class-components.md` and `what-are-props-and-state.md`, for an overview of core concepts.

For a more detailed understanding also review the folders:

- intermediate-concepts
- advanced-concepts

**1. What is a React component?**

- Documentation[https://reactjs.org/docs/components-and-props.html]

React focuses on the developer experience. The key advantage of React is that it makes it easier for front-end developers to build rich user-interfaces without having to think about DOM manipulation, CSS-selectors, rendering and updating multiple pages as an application grows. As the underlying data that drives the pages change, the user interface is updated and changed automatically. This is done seamlessly under the hood with key React methods that have been written into the library.

Components are the building blocks of the React library. They are functions with objects as parameters. The functions in these objects are the methods that the library relies on.

Components, are like advanced functions that create small reusable blocks of code that help developers construct complex user-interfaces.

**Components as functions**

Components are essentially JavaScript functions that return JSX.
The functions have params which are objects known as properties.

Like functions, components are reusable, flexible and are declared once and invoked many times. Just like smaller functions can be used as params in bigger functions, React components are the same, smaller components can be invoked or reused in larger, more complex components.

The input of a Component are `props` or `state` and the output is the rendered HTML with CSS mark-up ui. Props are immutable, while `state` represents ever-changing data (usually from user-inputs, but could be from internal automated updates as well).

Components' reusable nature allows applications to be built in a modular fashion. A page, for example, may have a navbar, articles, images, buttons etc., each of these parts of the user interface can be broken down into a Component.

Components are nested one within the other to create a page layout. In other words Components within another Component is a nested component that helps build a page layout.

A navbar, for example, is a Component with button Components, link Components and a logo Component nested in it.

Components unlike functions are used not invoked `<Component/>`, as the invocation of the function is the rendered Component.

**Class-based Components with Prototypal inheritance**

There are two types of Components - Functional and Stateful.

Stateful or class-based Components (as in React-2016) hold a private `state` - or data that changes the page display. In (React-2019) `state` can be injected with Hooks and makes class-based components redundant.

React class-based Components are JavaScript classes with prototypal inheritance.

Each component, therefore, is a modular blueprint that creates a reusable block of code that can be exported and imported into another module.
