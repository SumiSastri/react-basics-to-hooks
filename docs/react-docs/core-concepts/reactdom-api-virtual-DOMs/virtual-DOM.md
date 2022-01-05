# The virtual-DOM - an introduction

The purpose of this documentation is to outline how the virtual-DOM (ReactDOM-API) works compared to the (document-object-model) real DOM-API.

The virtual-DOM is a pattern that is not exclusive to the React Component Library. The pattern is used by different packages and these packages have their own DOM-diff calculations to manage their components underlying state. This document only describes the methodology used by the React Component Library and the ReactDOM-API

**What is the DOM and why is it important?**

The document object model or DOM , is an API. The DOM-API provides us with a visual representation of the state tree - or the underlying data of the app.

JavaScript is fast but updating the DOM is expensive, therefore optimizing how the DOM is used, will optimise performance.

The DOM-API is made up of nodes and each node holds some element of state in the node.

In vanilla JavaScript, and libraries like J-Query, the developer needs to work on accessing each node via CSS-selectors. This is inefficient in run-time, costly and time-consuming.

**What is layout thrashing and how does a virtual-DOM help?**

The DOM is updated with every state change and the whole DOM-tree has to change. The constant changing results in layout thrashing - when a browser has to recalculate where the change has occured in the DOM-tree through every branch of the DOM-tree.

The virtual DOM (ReactDOM-API) is a virtual copy of the DOM and is updated in the background via the inbuilt methods in the React library via the ReactDOM-API's tree-reconciliation alogrithms.

A snapshot of the DOM tree is saved and the DOM is updated only with the changes required with the ReactDOM-APIs tree-reconciliation algorithm in memory.

This copy of the user interface (UI) is stored in memory and everytime the React Component `state` needs to be changed, the React Component `state` is updated in the ReactDOM-API first before changes are made to the DOM-API.

This is done by computing the difference between the new UI and the snapshot-UI both which are now in memory.

Only the computed-diff is updated. With HTML tags, imperative vanilla JavaScript code can be written to update the input - by getting the `documentById` and writing logic to do this. With React we do not need to as the diff-algo does it for us and JSX is transpiled JavaScript.

The ReactDOM-API, (virtual-DOM) is like a virtual browser or sandbox where you can first run your code, see where it breaks, debug it and publish only when there are no breaking changes.

**See the demo `mvc-virtualDOM.js` to interact with the power of the virtual DOM**

Check this also with the Chrome Dev tools to inspect the input field in both HTML and React

**Gotchas**

While in most instances the DOM is accessed via the ReactDOM-API there are exceptions - forms can uses `refs` to directly access the dom - see `refs-and-the-DOM.md`
