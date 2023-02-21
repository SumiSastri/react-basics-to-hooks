Testing:
`npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer`
`npm install --save-dev react-test-renderer`
`npm install --save-dev @testing-library/react`
`npm install --save-dev @testing-library/jest-dom`
`npm i -D @testing-library/react@12.1.2 `


If you get the warning: Greetings, time traveller. We are in the golden age of prefix-less CSS, where Autoprefixer is no longer needed for your stylesheet. Update the project with the latest react-scripts - `npm install react-scripts@latest`

`npm i cjs-loader` the cjs-loader may malfunction and you may need to reinstall it
Manifest malformation
`npm i webpack-pwa-manifest -D`
`npm i favicons-webpack-plugin -D`

There are some challenges with scaffolding:

(node:21006) [DEP_WEBPACK_COMPILATION_NORMAL_MODULE_LOADER_HOOK] DeprecationWarning: Compilation.hooks.normalModuleLoader was moved to NormalModule.getCompilationHooks(compilation).loader

[https://github.com/vercel/next.js/issues/15576]
If errors with json-server see stackoverflow[https://stackoverflow.com/questions/70469717/cant-load-a-react-app-after-starting-server]

[https://stackoverflow.com/questions/51833429/react-app-proxy-error-could-not-proxy-request]

- Remove package-lock.json
- Delete node modules
- reinstall `npm install -y`

`npm install react-scripts@latest`
`npm install webpack@v5.70.0`
If any audit issues `npm audit fix`

run an `npm ci` clean install (removes node modules and reinstalls them but not package-lock .json)

Warning: Do not delete package.json files

Routing:
`npm install react-router-dom@5`

`npm install react-router react-router-dom@5` (version 6 has breaking changes -eg: uses Routes instead of Switch)

VS Code Thunder Client:
Download and use the extension as you would postman

json-server config:
- `"serve-json": "json-server --watch db.json --port 5000"`
- if no config the script - `npx json-server --watch db.json --port 5000` can be used

Data:
Faker.com
mockeroo.com
