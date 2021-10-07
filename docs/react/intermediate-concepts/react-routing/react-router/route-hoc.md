The purpose of this documentation is to outline the use of the Route HoC.


__What__ it is an object with 2 props - the file path and the component that matches the file path

__Why__ determines how pages are displayed with front-end routing middleware, it determines exact and dynamic paths

__Where__ On an index page that outlines page routes. Separation of concerns - not on ```App.js``` move it to its own folder and file.

__When__ As soon as there are 2 or more pages to navigate to

__How__ import Route from the react-router library

```<Route exact path= '/' component={HomePage}/>
   <Route  path= '/login' component={AuthLoginPage}/>
   <Route path = '/login/${id}' component={UserDetails}

```
Can also be written:-

```
<Route
								path="/login"
								render={() => (
									<div>
										<AuthLoginForm />
									</div>
								)}
							/>
```


**Gotchas** 

The placement of the routes is important see above the '/' path will render everything with '/' therefore needs to be right at the top. Then any path that has the same '/name' one should be exact and the others relative. The dynamic id paths come last.