**How to use Render Props & HOCs**

Documentation [https://reactjs.org/docs/render-props.html]

This is a demo of the Context API
To make the access of props easier the Context API has methods that you can use - wrapping the parent compnent in a provider and the child component in a consumer. The consumer method takes in the prop in the provider as a parameter and renders it as an expression in the appropriate JSX element

Component C nests Component E
There is no need to pass the prop through every intermediate nested component. This is the main advantage of the provider and consumer methods. Only the child prop that needs the prop consumes it.

Component E nests component F
Another way to pass props is by using the contextType property. This is passed just above the export default of the component or as a static type before the render method. Both options work. This works only with class components. Only one context can be consumed with this method.

The context is rendered here as This is the prop from the user provider - User Name 1

Component F can render props from Component C with Context API:
This is the prop from the user provider - User Name 1

This is the recommended way as you can consume several contexts with this method.

**How do you destructure state and props in React?**

As props are objects, they can either be passed directly as objects in the param of the function or we can reassign the object to a variable as individual values. Similarly arrays can be passed as array-blocks or each individual element can be assigned to a variable. In this way we can choose what we want use from the individual elements of objects and arrays.
This is known as destructuring. React Hooks uses destructuring of Arrays to access the lifecycle method in state. React also uses Object destructuring for props and state.

In a functional component, props are destructured before the return statement.

```
import React from "react";

export default function HelloWorld(props) {
  <!-- console.log(props) -->
  const { name } = props;
  return (
    <div>
      <h4>Hello World this is a {name}</h4>
    </div>
  );
}
);
};

```

In a class based component the destructuring of props and state happens in the `render` method

```
  render() {
    const { data } = this.state;
    const { name } = this.props;
    return (
      <div>
        <h4>
          Hello World is a class based component state is a string with the
          text: {data} and imported props: {name}
        </h4>
      </div>
    );
  }
}

```