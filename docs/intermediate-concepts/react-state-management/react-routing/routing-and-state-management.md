In a URL (Unique Resource Locator) finds a specific page on you web app. With a single page application (SPA), these routes are set in the virtual DOM>

Navigation from one page to another or internal links must also transfer state from one route and link to another.

SPAs have only one page displayed in the root HTML page and therefore routing libraries are used to access methods that provide state management of internal pages/ routes and fetching API resources and data.

**How does SPA routing differ from traditional HTML routing?**

In an HTML page, an anchor tag provides the ability to link pages internally on a page, externally to pages from other parts of the world-wide-web and routing happens when a href attribute is injected into an anchor tag that points to a URL - unique resource location.

`<a href='/url/ unique-resource-location'/>`

The URL request with HTML requests this resource everytime a link is clicked.

With an SPA there is only one HTML page. Therefore the server is only called once to render the whole app.

Within the root page of the app (app.js/ index.js) which is injected into the DOM (document-object-model) at the root node of the DOM-tree, one call is made to the SPA.

Therefore routing middleware in all SPAs are required to intercepts the HTTP request going to the server.

There are several front-end routers that are compatible with the React library.

The React library is router-agnostic as it is mainly concerned with modularising ui-components.

Therefore React does not ship with a router. The React-Router is one such external library with it's own methods that are applied to routing. It is the most widely used and best supported.

However, it is not the only SPA routing library compatible with React.
