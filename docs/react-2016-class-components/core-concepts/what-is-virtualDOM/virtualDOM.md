**What is the Virtual DOM and why is it important?**

The document object model or DOM , is an API. The DOM-API provides us with a visual representation of the state tree - or the underlying data of the app.

JavaScript is fast but updating the DOM is expensive, therefore optimizing how the DOM is used, will optimise performance.

The DOM-API is made up of nodes and each node holds some element of state in the node.

In vanilla JavaScript, and libraries like J-Query, the developer needs to work on accessing each node via CSS-selectors. This is inefficient in run-time, costly and time-consuming.

The DOM is updated with every state change and the whole DOM-tree has to change. The constant changing results in layout thrashing - when a browser has to recalculate where the change has occured in the DOM-tree through every branch of the DOM-tree.

The Virtual DOM is a virtual copy of the DOM and is updated in the background via the inbuilt methods in the React library via the DOM tree-reconciliation alogrithm.

A snapshot of the DOM tree is saved and the DOM is updated only with the changes required with the tree-reconciliation algorithm in memory.

This copy of the ui is stored in memory and everytime state needs to be changed, state is updated in the virtual DOM first before changes are made to the real DOM.

This is done by computing the difference between the new ui and the snapshot-ui both which are now in memory.

Only the computed-diff is updated. In HTML imperative code can be written to update the input - by getting the documentById and writing logic to do this. With React we do not need to as the diff-algo does it for us.

The virtual-DOM is like a virtual browser or sandbox where you can first run your code, see where it breaks, debug it and publish only when there are no breaking changes.

**See the demo `mvc-virtualDOM.js` to interact with the power of the virtual DOM**

Check this also with the Chrome Dev tools to inspect the input field in both HTML and React
