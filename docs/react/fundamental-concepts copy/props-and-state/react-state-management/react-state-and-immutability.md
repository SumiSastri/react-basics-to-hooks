__State and the principle of Immutablity__

State is the data the component holds, updates and displays. The state object holds the underlying data that may change over time.

The state object is readable and writable. However it is recommended to change the underlying state of a component with the method ```setState()```, it is also managed with life-cycle methods written into the React Component Library.

If you change state directly without using the ```setState()``` method the lifecycle methods will not be called upon and the state will change internally (you will see the changes in the console) but will not be rendered (you will not see the changed state in the rendering of the page).

The ```setState()``` method triggers the re-render of the page with the new information in the object that has been updated. 

Documentation for setState [https://reactjs.org/docs/react-component.html#setstate]

Documentation on class-based components [https://reactjs.org/docs/state-and-lifecycle.html]