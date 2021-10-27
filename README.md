# Table of Contents

1. [Project access](#Project-access)
2. [Project goals](#Project-goals)
3. [Certifications](#Certifications)
4. [Resources](#RESOURCES)

#### Project access

Pre-requisites:

- Latest version of node - Node 16 with NPM 6.14.12 (nodejs.org)
- GitHub account
- Local device connected to GH
- Add React Dev Tools to Chrome (or browser that supports React Dev Tools)

Clone Repo: https://github.com/SumiSastri/react-basics-to-hooks.git

**Install dependencies**

cd (change directory) from the root directory - react-basics-to-hooks - into the repo you want to access

- breaking bad
- react-2016
- hooks
- progressive-web-apps

`$npm install -y`

If any audit issues run
`$npm audit fix`

If you get the warning: `Greetings, time traveller. We are in the golden age of prefix-less CSS, where Autoprefixer is no longer needed for your stylesheet.`

update the project with the latest react-scripts - run this command in the repo

`$npm install react-scripts@latest`

**Run React apps**

`$npm run start`

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

Note: Ensure that gitignore file is set up. If it is not create the dot file

$touch .gitignore
Add this code to the file and save

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

```

#### Project goals

The Breaking Bad progressive web app is the key project that applies the knowledge of React, React Hooks and Progressive Web-Apps. It has been deployed on Netifly [https://happy-brown-985f49.netlify.app]

The project as a whole follows a set of Linked-in learning tutorials with their excercises.

#### Certifications

1. Learning React
2. React Building Progressive Apps
3. React Creating and Hosting a FullStack site
4. React State Management

Key folders for code base

- [Breaking Bad](https://github.com/SumiSastri/react-basics-to-hooks/tree/master/breaking-bad)
  Project following YouTube Brad Traversy's tutorial to experiment with Hooks

- [Fundamentals](https://github.com/SumiSastri/react-basics-to-hooks/tree/master/fundamentals)
  Tutorials on the fundamentals of React, follows the basic and intermediate documentation with examples and code snippets. This has a front-end which demos many concepts and has a brief explaination of how the code works. There are readme's in each section to drill down into the documentation and simplify it. There is a mini-project on the Context-API following a tutorial from NetNinja as I found the concepts a bit dry in the documentation, the project helped me understand how the documentation could be applied to a real o project.

- [Hooks](https://github.com/SumiSastri/react-basics-to-hooks/tree/master/hooks)

Work in Progress: Tutorials on the fundamentals of Hooks, follows the basic and intermediate documentation with examples and code snippets.

- [Progressive-Web-Apps-Videorama]([https://github.com/SumiSastri/react-basics-to-hooks/tree/master/progressive-web-apps/videorama])
  In the subfolder Videorama is a fully deployed app on Netifly, following a Linked-In course. This course has also been used to adapt the Breaking-Bad project and turn it into a PWA.

#### RESOURCES

The content of this repo has come from several references this lists some of the key resources I have used.

Tutorials:
Plural Sight: React the Big Picture : Cory House
Plural Sight: Designing React Components: Peter Kellner
Code: [https://github.com/pkellner/pluralsight-designing-react-components-course-code]

YouTube: React-2016 and React-Hooks examples come from this tutorial
CodeEvolution: https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3

Testing:
Plural Sight: Testing React Components: Liam McLennan
Plural Sight: Test-driven Development Using React:Chris Minnick
Plural Sight: Testing React Applications with Jest: Daniel Stern
Code [https://github.com/danielstern/isomorphic-react]

NetNinja best YouTube tute for testing: https://www.youtube.com/watch?v=7dTTFW7yACQ
GitHub Repo NetNinja Testing: [https://github.com/harblaith7/React-Testing-Library-Net-Ninja/tree/main/src]
Traversy Media very high-level overview: [https://www.youtube.com/watch?v=OVNjsIto9xM]
Academind - JavaScript testing(not specifically React): [https://www.youtube.com/watch?v=r9HdJ8P6GQI]
MPJ - Fun-Fun Functions[https://www.youtube.com/watch?v=Eu35xM76kKY] Too long and waffly

Documentation:
React
[https://reactjs.org/docs/getting-started.html]

Hooks
[https://reactjs.org/docs/hooks-intro.html][https://reactjs.org/docs/hooks-overview.html]

Cheat sheets from docs
[https://reactjs.org/docs/hooks-reference.html]

& FAQs - this one is really useful to understand why Hooks and benefits of using Hooks
[https://reactjs.org/docs/hooks-faq.html]

React Testing Library:
[https://testing-library.com/docs/]
