# How to configure a React app without the CRA (create-react-app) package

The purpose of this documentation is to outline how you can install react without CRA which is detailed in - See doc `create-react-app.md`

While this is a useful excercise to show you how React is just compiled/ transpiled JavaScript as CRA is continously maintained and updated with new features, this method should only be considered as a learning guide and is not best practice. Add react to your projects using the CRA package at all times. This document was set up in 2019 and pre-dates modern-react which has hooks instead of class components.

This document is also unlikely to be updated and maintained.

**What**

A list of requirements to install

- index.html
- a root `Index.js` component
- webpack
- babel
- a hot-reloader - that reloads the virtual DOM (similar to live-server reloading HTML pages)

**Why**

To understand how transpilers and compilers are set-up for modern JavaScript libraries and frameworks.

**Where**

Client side when you build a project

**When**

If you decide not to use CRA to spin-up a project

**How**

1. $ mkdir - `name of directory`

2. Initialise with node package manager
   $ npm init - y (the -y flags skips answering the default set up)

check you have the latest version of node [https://appdividend.com/2019/12/06/how-to-update-node-version-in-mac/] then install node in the project - npm install -g n and sudo n latest in admin mode

3. Check your package json file has been set up

cd into the directory / touch - create root file & config files for transpiling files into js index.html webpack.config.js .babelrc

4. Set up the folder structure - public and src folders

$mkdir public - where all static files live

$cd public & create file

$touch - index.html

The html boiler plate needs to be set up. If you are using VSCode, use the snippets extension to create this. (DOC tab)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- use link ref if you want to connect CSS -->
    <title>App title</title>
</head>
<body>
<!-- these are the files that pick up the src file root files and transpile them back to vanilla js -->
    <div id="app-root"></div>
    <script src="bundle.js"></script>
</body>
</html>

```

$mkdir src - base file that is used to render apps

$cd src & create file

$touch - index.js App.css App.js

The `index.js` file (vanilla React ) can be replaced by `index.tsx` - for TypeScript. Any ES6 files will need to be transpiled and routed into this file. Webpack will get the data from this file and React will also use this file for rendering the app into the html root file.

Boiler plate

```
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

<!-- declares the root file that the app needs to be rendered to and is passed to the render method -->
const root = document.getElementById('app-root')

<!-- ReactDOM render method takes 2 args the jsx element to render & the root html file to render to -->
ReactDOM.render(<App />, root)

```

Note that the `App.js` file is a React functional component. As functional components are constructors, the naming convention is for the file name to start in upper-case. Other files can be in camelCase, PascalCase, snake_case depending on preference.

In App.js set up the boiler plate

```
import React from 'react';

import './App.css';

const App = () =>
    (
        <div>
            <h1>Hello World</h1>
        </div>
    )
export default App;
```

The css file can be called `index.css`, `styles.css` or `app.css`In App.css set up boiler-plate

```
*,
*::after,
*::before {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 2px;
}
```

Set up the render method in

5. Install library dependencies and transpiler/ compiler dependencies

If you install anything incorrectly it is useful to know how to uninstall and reinstall packages.

**npm uninstall documentation**[https://docs.npmjs.com/cli/uninstall]

Library dependencies

react - npm i react react-dom react-hot-loader
typescript - npm i @types/react @types/react-dom
react-router - npm i react-router react-router-dom
reach-router - npm install @reach/router @types/reach\_\_router

The compile/transpile dependencies webpack and babel. The `bundle.js` deals with this effort

- babel - $npm i --save-dev @babel/core @babel-cli @babel/preset-env @babel/preset-react @babel/preset-typescript
- to use async-await $npm i --save-dev @babel/plugin-transform-runtime @babel/runtime

Note babel loader goes into the webpack install not the babel install

- webpack - $npm i --save dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader html-webpack-plugin

6. Set up the dot files to configure babel

See Gotchas with version control on Babel - @7 is different from @6

In the `.babelrc` file create the json presets.

**Babel documentation**[https://babeljs.io/docs/en/v7-migration]

Boiler plate for the dot file to configure babel

```
{
    <!-- defines the babel plug-ins required for this app, updates compatibility of node latest version with babel@7, allows you to use async & promises-->
    {
    "presets": [
      ["@babel/preset-env", {
        "targets": { "browsers": ["last 2 chrome versions"] },
        "useBuiltIns": "usage"
      }],
      "@babel/preset-react",
      "@babel/preset-typescript"
    ]
  }
}

```

7. Set up webpack config file

In `webpack.config.js` which is not a dotfile - this JavaScript file now transpiles the code from the application.

**Webpack documentation**

- [https://webpack.js.org/concepts/#browser-compatibility]
- Adding css to webpack config [https://dev.to/iamismile/how-to-setup-webpack-and-babel-for-react-59ph]
- [https://www.jackfranklin.co.uk/blog/css-modules-webpack-react/]
- [https://medium.com/@philoskepsi/how-to-build-a-react-app-with-webpack-4-and-babel-7-e69314efc5db]

In the webpack file set up file path (by importing file paths with require.js syntax), rules and module exports configuration - mode can be development, production, test depending on what you want to do.

Target can be web or mobile, resolve allows you to import and export node modules without the file extensions.

Webpack works with a series of loaders, this is why the babel loader is used in webpack and not with babel in the configuration. Similarly css defines the loaders and css libraries you may use (css, scsss)

```
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
    target: 'web',

    mode: 'development',
     <!-- entry indicates which file needs to be picked up as the root file to be rendered in html for typescript entry: './src/index.tsx', -->

    entry: './src/index.js',

    output: {
        filename: 'bundle.js', // the name of the bundled file
        <!-- path of the bundled file - build for Typescript  path: path.resolve(__dirname, 'build') -->

        path: path.resolve(__dirname, 'dist/'),

        publicPath: '/dist/',

         <!-- resolve method creates new folder in root directory and gives it the name build, can be distribution, production depending on what you want the minified code that goes into this file to be called, different from resolve key value pair below which allows you to import files without the file extensions add '.ts', '.tsx',  to the array if you are using TypeScript -->
    },

    resolve: {extensions: ['.js, '.jsx']},

    devServer: {
        <!-- gets root files  contentBase: './', -->
        contentBase: path.join(__dirname, 'public/',

        <!-- exports it to a port of your choice -->
        port: 5000

        publicPath: 'http://localhost:5000/dist/'

        hotOnly: true
    },

    module: {
    	<!-- /\.tsx?/ can be added for TypeScript -->
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            <!-- required for compiling and use of async-await -->
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react'
                ],
                plugins: [
                    '@babel/transform-runtime'
                ]
            }
        },
             <!-- css rules -->
            {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
           title: 'Async Await With React',
           template: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
```

Once the config file has been set up you also need to update package.json files - scripts to run the app

```
{
  "name": "react-redux-ts",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "npx webpack-dev-server --mode development",
    "build": "npx webpack --mode development"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Test if the configuration works with `$npm run dev` as we have set the mode to development - this should build and serve the front-end app.

The dist server is held in memory and served.

To run a build version set up the build script

`$npm run build` now should work when you are building and serving

**Gotchas**

Version control - Babel@6 to @7 challenges:

I found Andrew Flowers' solution the simplest for how to use async-await [https://andrew-flower.com/blog/Async-Await-with-React] Read more about incompability issues of async-await with node/ babel older versions and the solutions

https://github.com/babel/babel/issues/8829]

[https://blog.cloudboost.io/using-async-await-with-react-b807f9d7b64a]

[https://medium.com/@binyamin/enabling-async-await-and-generator-functions-in-babel-node-and-express-71e941b183e2]

[https://dev.to/codeprototype/modernize-your-reactjs-application-with-asyncawait-in-2018-1l9j]

[https://gist.github.com/thejmazz/067295d9fb8b22c77be0]

[https://www.smashingmagazine.com/2020/05/typescript-modern-react-projects-webpack-babel/]
