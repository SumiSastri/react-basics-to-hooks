**Routing as a form of state management - using React Router Library**

Routing is a form of state-management as data can get transferred from one page to another during the routing process.

SPAs have only 1 HTML page via which they route. Therefore a browser router is required. SPA routing is slicker and faster than the traditional route-per-page with HTML.

The React library is router-agnostic as it is mainly concerned with modularising ui-components, therefore does not ship with a router-library.

The React-Router is a middleware that ships with methods that are applied to routing by intercepting the server in the DOM-tree and creating internal page routes.

The React Router intercepts the HTTP calls to the server in the DOM. It then abstracts this call out to be handled by the React-Router library methods.

First it creates a route for each component
Then it switches these routes and pages
And finally these routes and switched pages are linked with a link reference - the router middleware intercepts the browser parsers request for a `href` sending it to the linked page path. Internally the Link matches to the route and sends the response back matching the link to the route and then injects the component into the DOM.
The root component `App.js` wraps most of these methods with the Route/ Switch higher order components so that the methods of the router are available across the app.

While there are other routers that can be used with React, the React-Router is the most widely used and best supported.

`npm install react-router-dom@5`

**React Router Methods**

BrowserRouter as Router (alias the method)
Switch

These two methods need to be used at the root `App.js` component so that the methods are wrapped around the whole App as they are HoCs.

```
<Router>
<Switch>
```

The Route HoC - takes 2 props the url path and the component (page) the server response requires for example if the HTTP request is for component1 then the response is routed through the path /url1

```
<Route exact path="/" component={FormPageLinks} />
<Route path="/url1" component={Component1} />
<Route path="/:url1_id" component={Component1} />
```

Note: Hierarchy of the `<Route/>` HoC is important with the `/` to be the first then the `/:id` that is because the Switch HoC will scan the code and render the first closest match for an exact match, this has to be specified.

The routes are nested between the opening and closing tags of the Router and Switch HoCs.

**Dynamic Routeswith route params or ids**

The Links take to you the linked page - hash is the internal link and `to` prop works like an `href`

Syntax

```
<Link to={pathname:'' ', search: , hash: # , state: }/>
```

Useage

```
<Link to="/">
<Link to="/:url1_id">
```

Note: On a page with the Router HoC, it must be placed within the Router tags or will throw an exception error. The Link object can be used on any page by importing it on the page and setting the link to the link path.

```
import { Link } from "react-router-dom";

<!-- in the render method -->
<Link to="/forms-create-content-hooks">
              <p>Create content</p>
            </Link>
```

You still need to instantiate the Route object on the home page for the link page and set it to the component to route to

```
<Route
          path="/forms-create-content-hooks"
          component={CreateContentForm}
        />
```

Two pages can point to the same link - so the home page can also point to the form page with another link and the right path

````
 <Link to="/forms-create-content-hooks">
              <li>Create Content Form</li>
            </Link>
            ```

**History Object**
createBrowserHistory()
`props.history()`
`props.history.push()`

**Routing and useEffect**

- Abort controllers
- Clean up functions
````
