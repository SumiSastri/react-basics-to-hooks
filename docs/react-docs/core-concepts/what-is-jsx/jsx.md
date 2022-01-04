# JSX (JavaScript XML)

The purpose of this document is to give you a quick overview of JSX (JavaScript XML) - the file extension for React components. While a React Component may work with `.js` files `.jsx` is the preferred file extension and `.tsx` the preferred typescript extension vs. `.ts`. Files that do not render any JSX can continue to use `.ts` and `.js` extensions.

JSX stands for JavaScript XML that is transpiled back into JavaScript in the React Library so that browsers can read them.

Documentation for JSX: [https://reactjs.org/docs/introducing-jsx.html]
Detailed documentation for JSX[https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized]

**What is JSX in a Component?**

The fundamental building block of React Component Library is the element.

React has built-in JSX elements for each HTML element. The JSX element is generated using JavaScript.

Every React Component is an extension of the React Component class, and every Component has a render method that displays either the properties (`props`) of the Component or the `state` (changing data).

You can use React's `createElement()` method to assemble these elements together, and you can create new custom elements by creating your own React Components.

Using the `createElement()` method for nested components is laborous, inefficient and confusing, which is why JSX files are used.

JSX as a sort of templating mechanism. So instead of writing nested `.createElement()` methods, you can just nest React JSX elements in a way similar to how you would write the HTML element that the component will render.

During your build process prior to deploying your app, your JSX code will be compiled into
`.createElement()` methods and transpiled back into JavaScript. JSX is just a convenience for developers to make building components easier and has no performance impact on the final code that runs in the browser.

**What is Component Composition?**

Each component in your user-interface (UI) is built from a combination of nested components (components within components). They are then compiled into a single root component that will be rendered in the browser using the `reactDOM.render()` method. This process of putting components together is called Component Composition.

Changes in the root component trickle down through the component tree and cause updates in child components. Babel transpiles JSX back into a function call for an HTML element. `React.createElement()`.

**What is the difference between HTML and JSX elements?**

In HTML, which is also a declarative code, this is an example of how the code would be written.

```
<h1 color="red">I am a heading </h1>
```

JSX superficially ressembles HTML and makes it easy for the developer to create page layouts using JavaScript functions and React methods within the JSX tags.

The same HTML can be converted into JavaScript with the React Library's `React.createElement()` method which converts the HTML into a string.

```
React.createElement("h1", {color: "red"}, "I am a heading")
```

This is what we mean by React is just JavaScript under the hood. React converts the HTML element into a string and renders it, just like HTML, with some key points to note.

JSX elements are immutable as they are JavaScript strings. Once created neither the children nor the attributes of the JSX can be changed.

JSX has tags, tag names, attributes and children. A few attributes are different as JSX transpiles back to JavaScript.

For example, the reserved words in JavaScript, `for` & `class` can not be used with JSX. JSX uses `htmlFor` & `className` as attributes to keep the description close to the HTML attributes.

Styling is notated in a JSON object `<style={{color: "blue"}}>` and comments are JavaScript not HTML comments `{*/ Comment/*}`

**How to create JSX from scratch?**

Node Package Manager (npm) also has a library to transpile HTML to JSX.

React can be written without JSX but it makes the developers' experience much better as the syntax is easy and familiar.

Under the hood, JSX transpiles JavaScript into an object and stores it in a variable. This JavaScript object represents the JSX is rendered.

Note that the render method is separate from the creation of the element method which uses the `ReactDOM.render()` method which takes `React.createElement()` as the argument of the call-back-function. This is why components are asynchronous in nature. The `render()` method calls the `createElement()` method. Note the arguments of the elements are an object or properties (`props`) of the JSX element.

```
let location = {
  city: "Madrid",
  country: "Spain"
}
ReactDOM.render(React.createElement("div", {style: {backgroundColor:red}}, React.createElement("h1", {style: {color:blue}}, {location.city} is located in {location.country})),
  document.getElementById('root')
```

The `React.createElement()` method takes a few arguements, the first is the element being created, the second is any attributes. If there are no attributes, the default is null. The next argument is what is contained between the JSX tags or the children - here it is the object `location.country`.

JSX must be enclosed in a parent `div` tag else it will throw a compile error.

A `React.Fragment` can also be used, which is an empty opening and closing tag `<>` JSX Elements `</>`.

React Fragments are used when you may not want a div tag rendered, as in a Component that deals only with front-end page routing.

To see how JSX is transpiled, you can copy any of the files from the components-demo folder and go to `babeljs.io` to the try-it-out tab and select the react presets. Paste the code and see how Babel transpiles JSX into JavaScript.
