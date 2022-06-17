The purpose of this document is to describe the flux architecture or design pattern that redux uses. This supplements the ```CARS-react-redux-data-flow.md``` file in this folder.


__What__  

Flux is a design pattern which follows how state is modified and updated in its lifecycle in an application.

__Why__ 

It follows a strict design pattern that manages state-chaos that is a side-effect of props-drilling in libraries such as React.

 Since Redux uses a global state, how does it prevent the chaos inherent in this approach? 

 Well, the problem with a global state isn't the fact that it's global per se, the problem is that there's no good way to control the excess and modification of this global state developers who may be working on different parts of the application.

 This means that with an unrestricted global state, devs can make whatever changes they want to the global state basically without any restriction whatsoever. 

 So we'd be relying on teams working on different components to be good stewards of this state and change it in predictable ways. Which from a software development standpoint, is not a useful assumption to make.

__Where__ 

__When__ 

An application scales and grows in complexity, dev teams have not thought through front-end data-management and architecture of ui-components. State is lurking everywhere and components no-longer are tasked with simply rendering props/ state they actually store data and manage state.

__How__ 


**Gotchas**  