**What is the difference between props and state?**

Both props and state hold information that make components more dynamic. There are differences in the way they are accessed and passed from one component to the other.

State is the underlying data in a class-based component and is managed within the component. It is a privately held method in the constructor making it accessible only within the component. It is updated and rendered using life-cyle methods that are native to the React Component Library.

State can be changed with the `setState` method. State is an object and the data can be accessed by `this.state` as it references the state in the class and the key word `this` points specifically to the state in the class component.

Props are additional properties of a component and get passed from a parent component to a child component.

Props are immutable, parent owns the props and can not be changed by the children. They are function parameters and are accessed with `props.propName` while in a class component props need to use the `this` key word to reference the object the prop is pointing to, it is therefore accessed with `this.props.propName`.

State can be accessed with the Hooks API with the `useState` Hook, props have no hooks and are changed within the code-base.
