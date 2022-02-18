
The purpose of this documentation is to outline what the ```mapStateToProps()``` method achieves

__Documentation__

__Resources & Further Reading__

For advanced useage - per-instance memoization - used mainly for tables and large blocks of data that need constant and frequent update documentation [https://redux.js.org/recipes/computing-derived-data#creating-a-memoized-selector]

__What__  

In a stateful legacy React component, each component holds state. With react-redux the component gets a read-only copy of the state as a prop.


The ```mapStateToProp()``` method takes one argument - state. It returns state as a plain object. 

eg: (Note this method takes a return statement not just an implicit es6 arrow function return)

```
const mapStateToProps = (state) => {
	return {
		blogs: state.blogs,
        loading: false,
        images. state.images
	};
};
```

__Why__ 

The method returns the whole state tree and then the part of state that the component requires to re-render.

```
const mapStateToProps = (state = {});
```
The change is evaluated in strict mode and only those elements described in the plain state object that maps the local state to props will be re-rendered. It offers a strict control of the changes in a component state and results in less buggy code.

__Where__

In a refactor from vanilla react to react-redux it replaces the export default statement and is written just above the ```connect()()``` method
It is also written before the ```mapDispatchToProps()``` method

```
const mapStateToProps = (state = {});
const mapDispatchToProps = dispatch({});
export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);
// export default ToDoForm; 

```
__When__ 

The method is invoked in the higher order function```connect()()``` method which connects react at the page level to the redux store.

```export default connect(mapStateToProps)(nameOfComponent)```

- This method is passed as the first argument of the ```connect()()``` method, which calls as its first arg the ```mapStateToPropsMethod()```. Passing the specific action-creator/action-type/action-payload to this method alerts the store of exactly which component is asking for precisely what change.

 - The second arg of the ```connect()()``` method is the component-container that needs to be updated and re-rendered with the state changes


```
export default connect(mapStateToProps, { functionNameOfActionCreator })(NameOfComponent-Container);
```

__How__ 

Step 1. Import action creators into the component
Step 2. Write the ```mapStateToPropsFunction()``` and pass the state object
Step 3. Invoke the function with the ```connect()()``` method
Step 4.
Step 5.

**Gotchas**  


- will not run if the store and the state are named the same way.


 
