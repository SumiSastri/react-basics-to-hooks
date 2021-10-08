The purpose of this documentation is to outline what a Class-based Component is in React and and when should you use it.

Documentation on class-based components [https://reactjs.org/docs/state-and-lifecycle.html]

**What is a Class-based Component in React?**

Class, Container, Stateful or Smart components contain State. State is the underlying data of a user interface.

In a Class Component, the intial state is rendered first. Everytime the user-interacts with the page, the data on the page changes and the component is updated and re-rendered. Without the render method, the function gets executed in the console but will not be rendered to the DOM.

As the purpose of the Class component is to render and update any data changes on a page, a single, void method `React.Component.render()` is a mandatory call-back function.

The render method's job is to return JSX and display the state of the component and its props.

State is always represented as a JavaScript object.

Class-based components use JavaScript ES-6 Classes to extend the the life-cycle methods in the React Component Library.

The React Library's inbuilt life-cycle methods, render is the only mandatory life-cycle method.

As State determines how the component is updated and re-rendered. Class components must have a render method to display the information held in State. Without the render method, the function gets executed in the console but will not be rendered to the DOM.

The class-based components use JavaScript ES-6 Classes to extend the the life-cycle methods in the React Component Library. The React Library's inbuilt life-cycle methods, render is the only mandatory life-cycle method.

To access the other pre-built methods, JavaScript class syntax is used - every component has a constructor and a super method. The super calls upon the constructor method in the React Component Library. The component now is able to access the pre-built life-cycle methods that help with the rendering of the data to the Virtual DOM. Changing state in the Virtual DOM first, the changes once compiled correctly are passed to the root HTML node and the real DOM.
