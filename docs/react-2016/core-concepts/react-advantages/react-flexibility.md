Plural Sight: React the Big Picture : Cory House

**Flexibility and growing eco-system**

- Multiple user interfaces for several platforms and use cases
- It is a library not a framework, therefore less opinionated compared to Angular and Ember which are frameworks
- Library approach makes it a flexible tool - main use case is components for web apps
- Great Eco-system
- Build static sites - with Netifly/ Gatsby/ Phenomic
- Mobile apps - with React Native
- Desktop apps -with Electron
- Server-side rendering - with Next.js
- React VR - virtual reality apps

The versatility comes from the fact that the render method is separate from the component composition There are over a dozen virtual rendering ecosystems.

Components help developers isolate features and build them independently. While one developer works on a nav-bar another can work on buttons, the components can be exported and imported to build a page. Facebook uses over 50,000 components for its user interface. Building smaller components also helps quickly solve and debug problems and test functionality of the component in isolation from the rest of the app before proceeding to end-to-end testing.

This GitHub repo lists them [https://github.com/chentsulin/awesome-react-renderer] - so from replacing HTML in emails to in the DOM, React creates virtual environments for render then plugs into these systems using the component library.

`ReactDomServer.renderToString()` the method that renders your component to a string of HTML

You can replace small portions of existing apps which have legacy PHP code with React. Facebook used React for this purpose. Small portions of a page can be injected with React components - eg: A Like button can be replaced with a component

So this is a low risk way to migrate a site to React or to use it on an app where it is most useful

Growing ecosystem

- Testing Jest
- State management Mobox-Redux
- API integration GraphQL
- Server side rendering Next.js
- Page routing React Router
