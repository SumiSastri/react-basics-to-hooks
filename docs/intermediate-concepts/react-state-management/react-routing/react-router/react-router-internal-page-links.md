The purpose of this documentation is to outline the use of the HOC,
`<Link/>`, in providing internal links to pages in an app.

**What** it is an object with 1 prop - the prop has 3 params, pathname, search, hash and state. State here refers to the reactr-router state not the state of the react component.

`<Link to={pathname:'' ', search: , hash: #  , state:  }/>`

**Why** internal and external linking of pages from the app

**Where** Anywhere the hash # is an internal link, on the home page with other routes, on pages that need external redirection - this is like a href in HTML.

**When** Even with a single page if areas of the page need to cross-reference with internal links.

**How** Make sure you have a ui-ux (user experience) designer working on the route paths based on cj-cx (customer journeys and experiences)

1. Import Link and the methods wrapped in the HOC
2. Add the props to and the page will link to the pathname provided

```
				<Link to="/">Home</Link>
				<Link to="/login">Login</Link>

```

**Gotchas**

On a page with the Router HoC, it must be placed within the Router tags or will throw an exception error
