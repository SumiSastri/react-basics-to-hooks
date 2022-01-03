3. How do you install React  in a project?
- Pre-requisites are node and a text editor
- Run npx create-react-app <app-name>
- node modules (all dependencies for the react app) - this is generated on npm install or the create-react-app CLI commands
- public (holds the root HTML file that renders the index.js - react controls the ui) -manifest json(progessive-web-apps)
- gitigonore (ignores files that need not be pushed to version control)
- package-lock.json (insures consistent installion of dependencies)
- package-json
- readme

Main folder for front-end developers is the source folder - src
- index.js (sends the app.js files to the HTML root DOM node)
- App.js (the file responsible for the single page app's view in the browser)
- App.css (styling)
- index.css (body-styling)
- serviceWorker (progressive web apps)
- App.test.js (sample unit tests that can be run)