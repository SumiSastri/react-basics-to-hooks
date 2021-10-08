**What is JSX in a component?**

Documentation for JSX: [https://reactjs.org/docs/introducing-jsx.html]
Detailed documentation for JSX[https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized]

In the React Component Library HTML is generated using JavaScript.

JSX stands for JavaScript XML that is transpiled back into JavaScript in the React Library so that browsers can read them.

Babel transpiles JSX back into a function call for an HTML element. `React.createElement()`.

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

As `for` & `class` are a key words in JavaScript, JSX uses `htmlFor` & `className`.

Styling is notated in a JSON object `<style={{color: "blue"}}>` and comments are JavaScript not HTML comments `{*/ Comment/*}`

Npm also has a library to transpile HTML to JSX.

React can be written without JSX but it makes the developers' experience much better as the syntax is easy and familiar.

Under the hood this is what JSX transpiles JavaScript into an object, stores it in a variable. This JavaScript object representing the JSX is rendered. Note that the render method is separate from the creation of the element method.

```
let location = {
  city: "Madrid",
  country: "Spain"
}
ReactDOM.render(React.createElement("div", {style: {backgroundColor:red}}, React.createElement("h1", {style: {color:blue}}, {location.city} is located in {location.country})),
  document.getElementById('root')
```

The `React.createElement()` method takes a few arguements, the first is the element being created, the second is any attributes. If there are no attributes, the default is null. The next argument is what is contained between the JSX tags or the children - here it is the object `location.country`.

JSX must be enclosed in a parent div tag else it will throw a compile error.

Sometimes, like in a routing component you may not want a div tag rendered, that is when you can use a React Fragment.

To see how JSX is transpiled, you can copy any of the files from the components-demo folder and go to babeljs.io to the try-it-out tab and select the react presets. Paste the code and see how Babel transpiles JSX into JavaScript.
