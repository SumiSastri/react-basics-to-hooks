The two types of data in a React application are props and state. The difference between these two is that props are immutable data that's passed from the parent to child, and state is the data in your application that changes in response to user actions. It's modified using the setState function, and calling the setState function triggers a re-rendering of your application.

Note that state updates may be asynchronous. React may choose to batch several updates in order to increase performance of your application.

So how do you know what the minimal UI state it? What is the minimal amount of data in your React application that needs to be modified using the setState method?

The first question to ask is, Is this data not passed in from a parent? If it is passed from a parent, that data's clearly a prop. The next question is, Does it change over time? If so, it may be state. And, finally, is it not possible to compute this data based on other state or props? Any data that can be computed in your application is a prop, not state.
