**Dynamic Routes with route params or ids**

Routes match url params which are protocol/host/domain name/ path/ querystring/ hash/fragment

protocol/host/domain name/ with an SPA are abstracted out of the request-response and only the path/querystring remain as params of the pathname prop.

In the query-string you may have an id which identifies a specific page amongst a list of pages/ or a specific resource by an id - a userid or an author id or a genre id.

The React-Router pathname prop is an object with the listed key-value pairs.

```
<Link to={pathname:'' ', search: , hash: # , state: }/>
```

Useage

```
<Link to="/">
<Link to={`/url/{id}`} />
```

The `useParams` hook allows you to use the params of the path in your component

Note: On a page with the Router HoC, it must be placed within the Router tags or will throw an exception error. Also as we are rendering a route dynamically we are invoking the `useParams` method in this prop and the to prop now is a method with curly-braces and template strings to render the id of the resource dynamically.
