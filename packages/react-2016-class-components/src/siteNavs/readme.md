## Routing and linking pages in React

- The react-router-dom that you install is not the only router option that you can use
- Add packages `npm install react-router react-router-dom`
- Import the library `import { BrowserRouter, Route, Switch } from "react-router-dom";` into the `App.js` file add all the routing - enclose them in the `Switch` and `BrowserRouter` components, one routes and the other switches routes. It is useful to use React Fragment here - import the component at the top and use `import React, { Fragment } from "react"` after the `Switch` component.

```
<BrowserRouter>
        <Switch>
        <Fragment>
          <div className="App">
            <Route exact path="/" component={HelloWorld} />
            <TableOfContentsBar />
            <Route path="/components" component={ReactComponents} />
               </Fragment>
        </Switch>
    </BrowserRouter>
```

- In the nav panel or the pages where you want links `import { Link } from "react-router-dom";` import the component from the library and use the same route path so that the components link to each other.

```
<div className="table-of-contents">
      <Link to="/" className="toc-item">
        <h6>Home</h6>
      </Link>

      <ol>
        <Link to="/components" className="toc-item">
          <li>What is a component in React?</li>
        </Link>
      </ol>

    </div>
```
