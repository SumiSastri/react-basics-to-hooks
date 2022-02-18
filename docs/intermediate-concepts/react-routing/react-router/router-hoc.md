The purpose of this documentation is to outline the use of the Router HoC.

__What__ it the parent HoC that wraps all routes and links with the history object and other props

__Why__ Instantiates the properties of the react-router library

__Where__ Above all routes

__When__ As soon as there are 2 or more pages with the Route HoC

__How__ import Router from the react-router library

```
<Router>
	<Route exact path= '/' component={HomePage}/>
   <Route  path= '/login' component={AuthLoginPage}/>
   <Route path = '/login/${id}' component={UserDetails}
<Router/>
```