The purpose of this documentation is to show how paths can be set with the React-Router



1. Exact path - is matches the exact route to the home page

```
 <Route exact path="/" component={Home}>
```

2. Named paths with routes - matches the path to the route without an exact match
```
            <Route path="/hip-hop-shop" component={ShopHome} />
            <Route path="/hip-hop-blogs" component={BlogHome} />
            <Route path="/hip-hop-organiser" component={OrganiserHome} />
```
3. Dynamic routing - paths with ids - these dynamically identify pages with specific id's and routes them to a page pulling in the data from the id variable.

```
		<Route path="/:blogs_id" component={BlogCard} /> 
```