# What is json-server

It is a node (npm) package that helps you create a dummy-local REST API with json-server.
This allows you to use a fake-api with fake-data to mock an api call

**Advantages**

- Saves you making a real-database (no need for express-mongo-db for prototyping)
- Real server
- Real REST API routes
- Libraries may not allow you to create/ update/ delete data so creating your own fake server and fake data to prototype a project this is a quick and dirty option

# How to set up the mock json-server
 - initialise with npm `npm innit --y`
 - install the package in your project `npm install json-server` 
 - watch the files by spinning up a back-end server
  `npx json-server --watch db.json --port 5000`
 - Create fake data in a `db.json` file in the root directory.
Each object you create becomes a resource and works similarly to an API end-point: In this repo the resources in `db.json` are:-
[http://localhost:5000/payroll]
[http://localhost:5000/comments]
[http://localhost:5000/shortStories]

# Resources
Documentation [https://www.npmjs.com/package/json-server]

Free tutorial: Egghead.io
[https://egghead.io/lessons/javascript-creating-demo-apis-with-json-server]

CodeEvolution series:
[https://www.youtube.com/watch?v=_1kNqAybxW0&list=PLC3y8-rFHvwhc9YZIdqNL5sWeTCGxF4ya]