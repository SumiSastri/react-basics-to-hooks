## How do you install React in a project?

- Pre-requisites are node and a text editor
- Run `npx create-react-app yourAppName`
- node modules (all dependencies for the react app) - this is generated on npm install or the create-react-app CLI commands/ webpack and babel are preloaded with this command
- public (holds the root HTML file that renders the index.js - react controls the ui) -manifest json(progessive-web-apps)
- gitigonore (ignores files that need not be pushed to version control)
- package-lock.json (insures consistent installion of dependencies)
- package-json - scripts object run the app
- readme
- react-dom is for web based apps, react-native is for mobile apps
- Main folder for front-end developers is the source folder - src
- index.js (sends the app.js files to the HTML root DOM node) this is why it is called a Single Page App (SPA) as all files routed through a single route file and the `ReactDOM.render()`method which takes two arguements, the component page to be rendered and the where you want to render it - the particular node of the HTML file which is the `root` file.

```
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

- You can create React elements by removing App.js and manually creating each element and its children, this block of code demos

```
<!-- Syntax

ReactDOM.render(React.createElement(tagName, elementProperties, children),
  document.getElementById('root')
); -->

ReactDOM.render(React.createElement("div", {style: {backgroundColor:red}}, React.createElement("h1", {style: {color:blue}}, "Hello World")),
  document.getElementById('root')
);
```

Note that the first arg is a string, the second which is props is an object and the the third is a nested element - a call back function.

- App.js (the file responsible for the single page app's view in the browser)
- App.css (styling)
- index.css (body-styling)
- serviceWorker (progressive web apps)
- App.test.js (sample unit tests that can be run)