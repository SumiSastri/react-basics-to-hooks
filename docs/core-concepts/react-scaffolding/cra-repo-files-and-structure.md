# What does CRA ship with?

The purpose of this documentation is to outline the requirements to create a react app with the create-react-app package (CRA) and to understand what the repo holds once the installation is complete.

# Documentation

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Requirements

- Node (latest LTM version)
  Node.js version >= 14 or above. You can use nvm for managing multiple Node versions on a single machine installed
- GitHub account
- Add React Dev Tools to Chrome (or browser that supports React Dev Tools)
- A code editor - VS Code used for these projects.

**Ensure Node is installed**

In terminal check if you have node and which version - if not install it

`node -v`
`npm -v`

Make a new folder
`mkdir my-nameofapp`

Change directory to the new folder created
`cd my-nameofapp`

Initialize it with node modules

`npm init`

This creates a new `package.json` file to store your project's dependencies installed via npm.

The fastest way to scaffold any react project is with the Create React App (CRA) site generator. This will generate a fully-functional React app with many common features built-in like Babel, Webpack, Jest, and a hot reloading development server. For react tables CRA has been installed with all the dependencies for this project.To add typescript `npx create-react-app my-nameofapp --typescript`

Wait for installation to be completed and cd into your app or clone this repo

You will see in your app:

- `node-modules` (all dependencies for the react app from node packages)

public folder (what is accessed publically)
-- root HTML file `index.html` that renders the `index.js` - react controls the ui as this is only one file react apps are called SPAs (single page applications) as only one file is
-- `manifest.json`(a short description of the app and the image types displayed as icons)

- `.gitignore` (ignores files that need not be pushed to version control into your GitHub repo)
- package-lock.json (insures consistent installion of dependencies)
- `.gitattributes` (git related file)
- `package.json` (stores the dependency list)
- `package-lock.json` (ensures consistent installion of dependencies)
- `README.md` (is mark-down for documentation of the app)

src-folder (Main folder for front-end developers is the source folder)

- `index.js` (sends the app.js files to the HTML root DOM node)
- `App.js` (the file responsible for the single page app's view in the browser)
- `App.css` (styling)
- `index.css` (body-styling)
- `serviceWorker.js` (progressive web apps)
- `App.test.js` (sample unit tests that can be run)
- `logo.svg` (react-logo can be replaced with your apps logo)
- `react-app-env.d.ts` ( file where your API secrets can be stored)
- `reportWebVitals.ts` (error logging)
- `tsconfig.json` (typescript files if you have added it to the CRA installation)

_BOILER PLATE FROM CRA_

This is the standard boiler plate that is in the `README.md` in the root file

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
