# refs - the exception to the rule

The purpose of this documentation is to outline how `refs` directly access the DOM-API and how and why they are the exception to the rule in the React Component Library. While most of the time the DOM-API is NOT accessed and the React algorithm rebases the DOM-tree, there are occassions when you may want to access the DOM directly.

**What are refs**

`refs` holds a DOM element reference, they can be used to access a specific DOM-node by-passing ReactDOM-API.

`refs` are used to manage uncontrolled components where direct DOM interface is required. Uncontrolled components are inputs that the React library does not control - like form inputs or form modals.

They are also used with 3rd party non-React Libraries.

`refs` are also used for `state` that is not rendered - tracking if a component has mounted, holding a timer, storing state between renders - eg. previous state-value for actions such as undo and redo/ cut and paste.

_Some useful reading:_

- LogRocket [https://blog.logrocket.com/a-guide-to-react-refs/]
- [https://medium.com/@rossbulat/how-to-use-react-refs-4541a7501663]
- Hackeroon [https://hackernoon.com/refs-in-react-all-you-need-to-know-fb9c9e2aeb81]

Portals
Used to access DOM child nodes for CSS. Once again may come back to them these blogs were useful at this stage to read

- LogRocket [https://blog.logrocket.com/learn-react-portals-by-example/]
- CodeBurst [https://codeburst.io/reacts-portals-in-3-minutes-9b2efb74e9a9]
