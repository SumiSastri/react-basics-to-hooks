The purpose of this documentation is to outline the use of the link HoC.

__What__  it is an object with 1 prop - the prop has 3 params, pathname, search, hash and state. State here refers to the reactr-router state not the state of the react component.

```<Link to={pathname:'' ', search: , hash: #  , state:  }/>``` 

__Why__ internal and external linking of pages from the app

__Where__ Anywhere the hash # is an internal link, on the home page with  other routes, on pages that need external redirection - this is like a href in HTML.

__When__ Even with a single page if areas of the page need to cross-reference with internal links.

__How__ Make sure you have a ui-ux (user experience) designer working on the route paths based on cj-cx (customer journeys and experiences)

1) Import the HoC from the react-router-dom library
2) Describe links
```
				<Link to="/">Home</Link>
				<Link to="/login">Login</Link>

```


4) 


**Gotchas**  

On a page with the Router HoC, it must be placed within the Router tags or will throw an exception error