## This is a demo of the Context API

The Context API makes it easier to share data up and down the prop-tree. The design pattern is similar to Redux, and uses HOC's wrapping the parent component in a provider and the child component in a consumer. The parent component abstracts state and stores it so that it can be consumed by any component in the component tree without the pain of prop-drilling.

In short, the Context API creates a shared context that can be provided to other components to be consumed.

The consumer method takes in the prop in the provider as a parameter and renders it as an expression in the appropriate JSX element. In combination with Hooks it works very similar to Redux.

Component C nests Component E
There is no need to pass the prop through every intermediate nested component. This is the main advantage of the provider and consumer methods. Only the child prop that needs the prop consumes it.

Component E nests component F
Another way to pass props is by using the contextType property. This is passed just above the export default of the component or as a static type before the render method. Both options work. This works only with class components. Only one context can be consumed with this method.

The context is rendered here as This is the prop from the user provider - User Name 1

Component F can render props from Component C with Context API:
This is the prop from the user provider - User Name 1

This is the recommended way as you can consume several contexts with this method.

Steps

1. Set up your context variables for each context you want to utilise in the app - createContext method, the Provider Component & ConsumerComponent - export them

```
import React from "react";

const ThemeContext = React.createContext(
  "Default value in the userContext variables file"
);
const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

export { ThemeProvider, ThemeConsumer };
export default ThemeContext;

<!-- Note the name of the variables and the name of the class-component should be different -->
```

2. Set up the parent - the provider that provides the data of state to the consumers

- import the ProviderContext variable into the Provider Component
- set up state of the Provider Component as required for any child components that will be wrapped in this Provider Component in your app
- In the render method create the parent ProviderComponent and pass state as a prop into the value attribute
- pass this.props.children expression into enclosing ProviderComponent tags, this will allow the child components wrapped in the ProviderComponent to access the context you have created in the Provider/Consumer parent-child wrapper components.

```
import React, { Component } from "react";

import { ThemeProvider } from "./ThemeContextVariables";

export class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { text: "#555", ui: "#ddd", bg: "#eee" },
    dark: { text: "#ddd", ui: "#333", bg: "#555" },
  };
  render() {
    return (
      <div>
        <ThemeProvider value={{ ...this.state }}>
          {this.props.children}
        </ThemeProvider>
      </div>
    );
  }
}

export default ThemeContextProvider;

```

3. Utilise the data in state from the ProviderComponent by wrapping any child components by wrapping them in the ProviderComponent tags. Here we are using HOC's we are creating the ThemeContextProvider component that returns the ThemeProvider component. So we are exporting the ThemeContextProvider component that wraps the ThemeProvider component.

```
import React from "react";

import Navs from "./components/Navs";
import InventoryList from "./components/InventoryList";
import { ThemeContextProvider } from "./contexts/ThemeContextProvider";

function Main() {
  return (
    <div>
      <ThemeContextProvider>
        <Navs />
        <InventoryList />
      </ThemeContextProvider>
    </div>
  );
}

export default Main;
```

Check in developer tools React extension that the data from state has been imported into the ThemeProvider Component and therefore can be utilised by the child components.

4. Access the HOC - ThemeContextProvider

Method1:

The themeContext function that has been set up in the context variables for export, use it as a static contextType - remember it can only be importeed into another class component so change any functional components into class components. It can only be used once. The second method with the HOC of a ConsumerContextComponent can be used multiple times.

`static contextType = ThemeContext`

This will now search up the prop-tree for the first instance of this method to link it to the component.

We are using it in the inventoryList destructuring state variables. Then we are passing only the variables we need to style the inventoryList in the JSX tags, defining inline-styling for the tags. We are conditionally rendering because we are going to add a toggle button later to see how the data can be updated when using the Context API.

```
import React, { Component } from "react";

import ThemeContext from "../contexts/ThemeContextVariables";

class InventoryList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div className="card" style={{ color: theme.text, background: theme.bg }}>
        <ul>
          <li style={{ background: theme.ui }}>Microwave</li>
          <li style={{ background: theme.ui }}>Fridge</li>
          <li style={{ background: theme.ui }}>Freezer</li>
          <li style={{ background: theme.ui }}>Hoover</li>
          <li style={{ background: theme.ui }}>Washer-Dryer</li>
          <li style={{ background: theme.ui }}>Freestanding Hob-Grill-Oven</li>
        </ul>
      </div>
    );
  }
}

export default InventoryList;

```

Method 2:

Use another HOC - a ContextConsumer, we will use this on the Navs.

We import the ThemeConsumer from the variables file and wrap the JSX in the Consumer HOC. This takes a function as a prop, so we pass the function in and that function as a call back takes the return of the JSX elements.

The param for the call back function is the context you have just set up - themeContext in this example.

Note therefore there are two return statements one after the render method that renders the HOC and the second return statement that takes the arg, return the JSX elements from the ThemeConsumer HOC.

```
import React, { Component } from "react";

import ThemeConsumer from "../contexts/ThemeContextVariables";

class Navbar extends Component {
  render() {
    return (
      <ThemeConsumer>
      {(themeContext) => {
          console.log("context import", themeContext);
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.ui, color: theme.text }}>
              <h1>Mini-contextAPI-project</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
              </ul>
            </nav>
          );
        }}
      </ThemeConsumer>
    );
  }
}

export default Navbar;

```

5. Update the data with a toggle button

Steps

1. Create a new child component, it should be a class component as we are updating the state of the parent component which is the ThemeContextProvider

2. To consume information from the parent component, use method1 `static contextType = ThemeContext;` to consume state from the parent. We use this method because this toggle will only be used once to toggle the theme of the component and you are not going to reuse this functionality in other components.

3. Write the toggleTheme function in the parent component - the ThemeContextProvider - remember to use previousState to update state.

```
 toggleTheme = () => {
    this.setState((prevState, props) => {
      return { isLightTheme: !prevState.isLightTheme };
    });
  };
```

Pass the new function into the params of the prop of the ThemeProvider component. Remember it not part of the state object which is passed with the spread operator, but the second property of the param which is an object, so it takes both the `this` key word to point to the object ThemeContextProvider, which is the parent HOC of the ThemeProvider, it also takes the object naming convention of the key-value pair that is comma separated: `<ThemeProvider value={{ ...this.state, toggleTheme: this.toggleTheme }}>`

In this new child component we are deconstructing state which is passing down the context variable from the contexts we have set up - this refers to the orginal context function and not the themeContext param.

`const { toggleTheme } = this.context;`

In the render method, we want to use a JSX button which passes the toggleTheme method of the ThemeProvider component - (the ThemeProvider is a component wrapped in the parent component ThemeContextProvider so this a child of the ThemeProvider) - the prop comes from the child of the HOC, the ThemeProvider component. So in our return statement we enclose the button JSX in a div JSX

```
return (
      <div>
        <button onClick={toggleTheme}>Toggle light to dark theme</button>
      </div>
    );
```

We can now enclose the new ToggleTheme component in the nested ThemeProvider Component in the Main component of the app.

6. Create multiple Contexts - Steps

a) Add new variables for the new Context
b) Create a new ContextProvider parent component import variables from the new context variables
c) Add state to the ContextProvider and in the return statement, add the prop-attribute of value to the param of the newProvider. It is an object that spreads state and any functions as the second, third, key-pair values in the newProvider created - or any static props in state
d) Don't forget to pass `this.props.children` into the enclosing newProvider that will be used
d) Import the ContextProvider component into the page you want to use the ContextProvider, wrap the first ContextProvider with the second (if the order does not matter - you can wrap the second with the first) - this is in Main.js in this app
e) Create the new child component (Consumer) that will consume state from the new ContextProvider

6. Consume multiple Contexts - Steps
   a) Two consumers can not be used with the `static contextType = ThemeContext`
   b) Import the newConsumer from the context variables
   c) Pass the value of the newConsumer into the render method as a variable and

```
   <AuthConsumer>{(authContext) => ()}
```

d) Wrap the other Consumer components in the parenthesis as this is the call back function.

```
export class Nav extends Component {
  render() {
    return (
      <AuthConsumer>
        {(authContext) => (
          <ThemeConsumer>
            {(themeContext) => {
              console.log("context import", themeContext);
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.text }}>
                  <h1 className="all-center">Mini context-API Project</h1>
                  <ul>
                    <li>Logged-in</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeConsumer>
        )}
      </AuthConsumer>
    );
  }
}

export default Nav;
```

e) Now you need to define the param from the state object in the AuthProvider and you need to do this along with all the variables above the return statement
f) Now you can use the param variables to output JSX.

```
import React, { Component } from "react";

import ThemeConsumer from "../contexts/ThemeContext/ThemeContextVariables";
import AuthConsumer from "../contexts/AuthContext/AuthContextVariables";

class Nav extends Component {
  render() {
    return (
      <AuthConsumer>
        {(authContext) => (
          <ThemeConsumer>
            {(themeContext) => {
              const { isAuthenticated, toggleAuth } = authContext;
              console.log("authContext import", authContext);
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1 className="all-center">Mini context-API Project</h1>
                  <button className="btn-pink" onClick={() => toggleAuth()}>
                    {isAuthenticated
                      ? "LOGGED-IN: Click to log-out"
                      : "Click to LOG-IN, your are logged out"}
                  </button>
                </nav>
              );
            }}
          </ThemeConsumer>
        )}
      </AuthConsumer>
    );
  }
}

export default Nav;
```

Documentation [https://reactjs.org/docs/context.html]

Very well explained by Shaun, NetNinjas, the mini-project follows his tutorials to practice using mutliple contexts [https://www.youtube.com/watch?v=XkBB3pPY3t8&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI&index=2]
