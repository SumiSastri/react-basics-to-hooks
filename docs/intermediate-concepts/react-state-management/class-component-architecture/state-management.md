**What are React lifecycle-methods and why are they needed?**

As a component's data changes, the state object is first rendered in its original state when the component mounts. Data is re-rendered everytime the `setState({})` method is called re-rendering only the props in this method, or when the `useState()` Hook is used to update state.

As State determines how the component is updated and re-rendered. Class components must have a render method to display the information held in State. Without the render method, the function gets executed in the console but will not be rendered to the DOM.

With Hooks, the lifecycle methods are handled by the React Library with the hook `useEffect()`

**References**
