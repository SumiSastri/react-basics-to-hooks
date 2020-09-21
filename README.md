# Table of Contents

1. [Project goals](#Project-goals)
2. [Folder structure](#Folder-structure)
3. [Project access](#Project-access)

   [RESOURCES](#Resources)

#### Project goals

In this project, I explore the documentation of React and React Hooks. It is one in a series of tutorials where I work on the documentation and tutorial projects to apply the knowledge from the documentation and set into context.

#### Folder structure

There are 4 folders in this project each with their own readme to document what I have learnt.

1. [Breaking Bad](https://github.com/SumiSastri/react-basics-to-hooks/tree/master/breaking-bad)
   Project following You Tube Brad Traversy's tutorial to experiment with Hooks

2. [Fundamentals](https://github.com/SumiSastri/react-basics-to-hooks/tree/master/fundamentals)
   Tutorials on the fundamentals of React, follows the basic and intermediate documentation with examples and code snippets. This has a front-end which demos many concepts and has a brief explaination of how the code works. There are readme's in each section to drill down into the documentation and simplify it. There is a mini-project on the Context-API following a tutorial from NetNinja as I found the concepts a bit dry in the documentation, the project helped me understand how the documentation could be applied to a real o project.

3. [Hooks](https://github.com/SumiSastri/react-basics-to-hooks/tree/master/hooks)

Work in Progress: Tutorials on the fundamentals of Hooks, follows the basic and intermediate documentation with examples and code snippets.

3. [Progressive-Web-Apps]()

A fully deployed app on Netifly, following a Linked-In course.

#### Project access

**Install dependencies**

npm install -y

**Run React apps**

npm run start

Access project scripts - debugging if you have incompatibility issues with es-lint/

1. Check if node_modules/eslint is outside your project directory - npm has issues with package hoisting - Try running npm ls eslint in your project folder to see where it is - This will tell you which other package (apart from the expected react-scripts) installed eslint.

-The files in these folders are outside the project directory you can

1. Delete package-lock.json
2. Delete node modules
3. Remove es-lint from dependencies/ dev-dependencies
4. run `npm install -y`
5. You can also try `npm uninstall eslint` and then `npm run start`

Note: If nothing else helps, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project. **I have chosen this option as I am not using this folder to deploy or run a production build.**
That would permanently disable this preflight check in case you want to proceed anyway.

#### RESOURCES

Documentation:
React
[https://reactjs.org/docs/getting-started.html]

Hooks
[https://reactjs.org/docs/hooks-intro.html][https://reactjs.org/docs/hooks-overview.html]

Cheat sheets from docs
[https://reactjs.org/docs/hooks-reference.html]

& FAQs - this one is really useful to understand why Hooks and benefits of using Hooks
[https://reactjs.org/docs/hooks-faq.html]
