The purpose of this documentation is to outline at a high level what reducers are and their function in the flux-flow

__Documentation__

__Resources & Further Reading__

__What__  

Reducers are functions with a set of conditional statements that use the switch operator to execute the function

While the actions describe state-change, reducers actually change state from one state to another. They perform the ```setState()``` function in vanilla React.

Reducers take actions as imports. The state in the actions payloads are transformed it to the next state (updated state). This updated state is forwarded to the store via a root-reducer. 

- Under the hood, reducers, or the reducing function, reduce the collection of values of the actions to one action. 

It is a use case for the higher order function reduce(fold)/ array.reduce() method where multiple values are passed with the view to getting a single new value without changing the state of the original data passed inthe reducer method has an accumulator and a value and a call back function ```reducer(accumulator, values){}```

-  The accumulator is the state tree, values are the action-creator objects 

-  State is changed by reducers (pure functions with no side-effects) takes (current) state (also known as modified or touchedsate. Pristine state refers to the original state tree that never gets modified, only duplicated) 

- Once the pristine state has been duplicated, it is duplicated or "touched" and modified by a series of switch statements to execute the actions payloads sent to the store. These statements update the component state with a specific action request/ payload

- The switch statement makes sure that both the type and the arguments on either side of the conditional operator are absolutely true (both in type and in form) and then returns the new state tree to the component requesting (subscribing to) the update.

__Why__ 

It offers controlled management to state mutation in the lifecycle process.

__Where__ 

In the store - only the reducer (via the root reducer) have access to the store. It is like the guard to the store only allowing actions with their payloads in the store with strict pure functions and early exit of code blocks with the switch cases. 

__When__ 

The store only deals with those actions that require changing when it evaluates the difference between the initial state and the updated state described to it in the reducer functions function body.

__How__ 

The store evaluates strictly (true-false) values of the switch statement and updates the component state by dispatching a new action to the component requiring the change.

This is a brief theoretical overview - for the how to set up a reducer and a root reducer, follow the guide in the ```reducer-setup.md


**Gotchas**  
