The purpose of this documentation is to outline what the CRA (create-react-app) ships with and how to install it in a project.

**Documentation**
Follow the official documentation on: [https://create-react-app.dev/] & getting started[https://create-react-app.dev/docs/getting-started]

**Resources & Further Reading**
CodeCademy[https://www.codecademy.com/articles/how-to-create-a-react-app]

**What**  
CRA is a pre-transpiled pack that sets up a react project. It ships with:

- node modules (all dependencies for the react app) - this is generated on npm install or the create-react-app CLI commands/ webpack and babel are preloaded with this command

- public folder (holds the root HTML file that renders the index.js - react controls the ui)

  - manifest json(progessive-web-apps)

- dotfiles
- gitignore (ignores files that need not be pushed to version control)

- JSON files

  - package-lock.json (insures consistent installion of dependencies)
  - package-json - scripts object run the app

- readme.md for mark-down documentation
- Note: react-dom is for web based apps, react-native is for mobile apps

- src file - The main folder for front-end developers is the source folder (src)

In the src folder - App.js (the file responsible for the single page app's view in the browser) - App.css (styling) - index.css (body-styling) - serviceWorker (progressive web apps) - App.test.js (sample unit tests that can be run) - index.js (sends the app.js files to the HTML root DOM node) this is why it is called a Single Page App (SPA) as all files routed through a single route file and the ReactDOM.render()method which takes two arguements, the component page to be rendered and the where you want to render it - the particular node of the HTML file which is the root file.

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

Note that the first arg is a string, the second which is props is an object and the the third is a nested element - a call back function.

```

Testing: ships with Jest as a test runner.

**Why**

Takes the grunt work out of creating a pack that transpiles all the code of ES6 back into vanilla JavaScript.

The tools we want to use, like JavaScript modules, JSX and bundling are not always supported by the browsers that our users will use.

Also, we want a working test set up a Web servant host our application in a way to optimize our application for production deployment. All of these things have solutions, but assembling the system yourself is a large amount of work before you even start work on your project.

For this reason, many people have published tools that help set up a new React application. The most popular is CRA. The packages launches a server on Port 3000 by default and opens the application in your default browser. This is a live environment. The source code of the application can be detected by a file system watcher. The application will rebuild and it will be reloaded in the browser.

**Where**

Client side if you decide to use the React ecosystem.

**When**

Scaffolding

**How**

Run `$ npx create-react-app yourAppName`

In a folder $ npx create-react-app . the dot creates the react pack in this folder

**Gotchas**

Additional set-up required server-side in a full stack app. Connectivity between backend and front end also needs some additional configuration.

Full-stack:
Package-json & adding a proxy

- Create a back-end proxy for your server in your client side package json file

- This is created as soon as you run the Create-React-App installation

- Under the scripts object add one more key-value pair ` "proxy": "http://localhost:5000",`
  This allows you access to your home route on the back-end router - if you have chosen a differnt port all your need to do is replace the port number `"proxy": "http://localhost:yourportnumber",`

Concurrently now becomes an interesting library to add if you are going full stack - look at the docs in the server-side documentation
