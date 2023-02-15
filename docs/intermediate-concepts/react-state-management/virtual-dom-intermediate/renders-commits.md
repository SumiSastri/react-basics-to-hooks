The virtual-DOM (Document Object Model) - some intermediate concepts

The purpose of this document is to advance the beginner's knowledge of the virtual-DOM and how it works in React.

As you know, Tthe virtual-DOM is a pattern that is not exclusive to the React Component Library. The pattern is used by different packages and these packages have their own DOM-diff calculations to manage their components underlying state. This document only describes the methodology used by the React Component Library and the ReactDOM-API.

React is divided into multiple user-interface (UI) components. These components are how React internally represents the DOM, in a data structure called the virtual DOM.

**Diff and render**

React performs a diff algorithm and calculates the deltas - the ways the components that have changed. From here, it renders the part of the DOM tree that was affected by this change. Now a render on its own does not apply the changes onto the actual web page that you see.

In order to do this, React performs what's known as a commit. A commit applies the rendered changes onto the web page. This means that any existing components that have changed are updated, newly added elements to the virtual DOM are mounted onto the actual DOM, and components that were marked as removed from the virtual DOM are unmounted from the actual DOM.

Knowing how React works through renders and commits will help us better understand how we can improve the efficiency of our React code in the applications we create.
