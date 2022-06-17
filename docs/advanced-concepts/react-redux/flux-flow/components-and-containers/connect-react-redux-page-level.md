The purpose of this documentation is to outline is to outline how the ```connect()``` method connects the 2 libraries react and redux together at a page level.

__Documentation__

The purpose of the connect method documentation[https://react-redux.js.org/using-react-redux/connect-mapstate]

The connect method args[https://react-redux.js.org/using-react-redux/connect-mapdispatch]

Documentation on usage[https://react-redux.js.org/using-react-redux/connect-mapstate#usage-guidelines] as component transformations/ updates/re-renders are expensive and it is not efficient.

__Resources & Further Reading__

__What__  

Connect gives the components and containers access to the redux-store. The store can dispatch actions to modify the component-state listening to the changes described by the reducer.

Connect encapsulates the logic of the action-creator and the action payload and takes care of updating the store with tthe store dispatches a new action to the component. 

The connect method should be a pure function and synchronous. All side-effects should be dealt with thunks or selectors (middleware).

It is one of the store's methods is the higher order functions, or HoFs, `. A HoF is a function that returns a function. 

The connect method connects the react library to the redux store. Once the component-container is connected to the store the connect method is called. 

```connect()()``

 - The first arg the method ```mapStatetoProps()``` this method takes the state as it's argument and returns a plain object.

- The second arg is the method ```dispatchStateToProps()``` this is the listener function that listens to the changes described by the reducer and changes the component state.


__Why__ 

It is the strict mode of data-flow in the flux-pattern and is the only way that the react-ui at page-level connects to the store. Without connect, the changes hang in the flow pipeline without being executed.

__Where__ 

The method wraps the ```export default``` method of the node module with the callback args in the component state and receives the callback of the dispatch method sent to it by the store.

__When__ 

After all the logic of the component is written, the ui state determined and what changes required are outlined by the action creators, these are evaluated when the state is updated by the reducer and notifies the store of these changes. The store then dispatches this information back to the connect()() function dispatching and providing it with the actions payload. 

__How__ 

To invoke the method it needs to be imported into the component. 


```import { connect } from 'react-redux';```

Note: As this is a method that belongs to the joining of the 2 libraries you are importing ```react-redux```.


The two methods needs to be written and then the ```connect()()1``` can be invoked in the export default section of the component. 

```
const mapStateToProps = (state) => ({})
const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(CreateToDoForm);
```

More details in the doc  ```map-state-to-props.md```

Both methods need not be called if one arg is missing use null

```
export default connect(mapStateToProps, null)(BlogsHome);
export default connect(null, mapDispatchToProps)(BlogsHome);
```

**Gotchas**   

Connect simply connects the component to the store. The dispatch function must be passed into the connect method for the state to update.

Both functions are required and the order of their execution is important. First state must be mapped to props and called and then the dispatch method mapped to props.


