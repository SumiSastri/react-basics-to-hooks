# Destructuring props and state - an introduction

The purpose of this document is quickly outline a frequent pattern seen in React codebases - the destructuring of the `state` and `props`.

_What is destructuring_

Destructuring is a vanilla JavaScript concept used for both objects and arrays.

In React-2016 you can destructure `props` and `state` as they are both objects. In a class-based component, React Component `state` is defined in a JavaScript class, in the `constructor()` method as a JavaScript object, it is updated with the `setState()` method.

With React-2019, `state` is an array which is destructured to hold state information and the `useState` hook is used to access the component parts of the array. The `state` array element is then updated with a custom function.

Destructuring in React, as in JavaScript, is unpacking the `state` or `props` intrinsic properties as objects or arrays into single elements rather than key-value pairs so that they can be passed down in a shorted version to the child components.
