### What does the useContext Hook do?

- The Context API helps to solve the challenge of prop-drilling - which is the challenge in the design pattern in React to send data through the component tree.

In the older versions of React, this had to be done manually either with the `renderProps` method or with HOCs(Higher Order Components) where parent and child components are wrapped with the props manually before being passed down.

In a small app this is ok, but with deeply nested components in the component tree, it becomes difficult tracing where the prop is defined and where it is used - this is because it has to be passed to components in the component tree that actually don't use the the prop!

Context provides a way to pass data through the component tree with less tree shaking as you do not have to pass down props at every level.

The Context API solves this problem, but the `useContext` Hook makes the process even simpler and the code more efficient.

Code Artistry Tutorial [https://www.youtube.com/watch?v=cBM5xXyekmM&list=PLXzwvX1H0ZGqoi3Ps9L8H436fgiaOkIu8]

You Tube
CodeEvolution-15
[ttps://www.youtube.com/watch?v=CI7EYWmRDJE&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=15]
