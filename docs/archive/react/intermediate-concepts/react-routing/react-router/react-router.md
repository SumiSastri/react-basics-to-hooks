The purpose of this documentation is to outline how the React-Router library works and how to route front-end pages in a react SPA (single-page-application)

__Documentation__ [https://reactrouter.com/web/guides/quick-start]

React-Router is a library that ships with its own methods.

__Tutorial__

A slightly old tutorial (2018) by NetNinja [https://www.youtube.com/watch?v=QUz3k2O3ZJU&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=25&ab_channel=TheNetNinja] is a series on React-Redux, I found the series a good reminder and revision of React principles and I used it mainly to refactor to Redux. From videos 25-32 deal with React-Router.


__Step-by-step guide__ 

A good one can be found at this FreeCodeCamp blog[https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/]

My notes from various sources including the official documentation.

Step 1. Install the library dependencies
``` npm install react-router react-router-dom``` this router ships with several methods like the switch (to switch routes),route (defines routes) and the Browser Router (routing at a browser level)

Step 2. Import the library methods from both react and the react-router

```
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Link } from 'react-router-dom';
```
Step 3.  Use React.Fragment - which removes the need to add several div-JSX tags to the app-page

Step 4. Use the HOC's in ```App.js``` in this order.

```
</Fragment>
      </Switch>
    </BrowserRouter>
```
Nest the rest of the components within these tags.

Step 5: Define your home page with an exact path.

```
 <Route exact path="/" component={NavBar}>
```

Step 6: Define all other routes and their path-names
```
            <Route path="/hip-hop-shop" component={ShopHome} />
            <Route path="/hip-hop-blogs" component={BlogHome} />
            <Route path="/hip-hop-organiser" component={OrganiserHome} />
```
Step 7: Link pages (not with h-refs but the router library HoC Link)

```
	<Link to="/">
						<!-- Any JSX tag span, button, div -->
	<h4 color="secondary">Back to Home</h4>
	</Link>

```

__NavLinks vs. Links__

- NavLinks as an HoC can be imported from ReactStrap (a CSS library) as well - this makes the link active for authenticated routes

On the page you want to link import the link HOC and wrap the JSX element with the Link Hoc


```
import React from 'react';
import { Link } from 'react-router-dom';

import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap';

const BlogHeader = (props) => {
	return (
		<Toast>
			<ToastHeader icon="primary">Hip-Hop Blogs</ToastHeader>
			<ToastBody>Get the latest news and concert updates</ToastBody>
			<Link to="/hip-hop-blogs">
				<Button color="warning">Go to Blog Page</Button>
			</Link>
		</Toast>
	);
};

export default BlogHeader;
```
Step 8: Create a not-found page 

__Programmatic Redirects: The History Object__

Net Ninja explains this very well in video 27: [https://www.youtube.com/watch?v=GiaFedx5cfA&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=27&ab_channel=TheNetNinja]

```props.history()``` is a method available with every component with a route-path. 
the ```withRouter()``` HoC can be used using the component as the param of the method ```withRouter(NavBar)```

A programmatic re-direct is useful to redirect to a 404 - page not found component.

See ```programmatic-redirects.md``` for more information on the history object

__Unique Page Displays Routes With Ids__

Step 9: Routes with ids
The general route is the same with a forward slash for the id - route parameters are the changing elements of a route.

You can find the route parameter by using the method ```match.params()```

- 9.1 Go to the Card component where you have already created a card with an id that is displayed in the list component and create some dummy text under the title
```	<h4>Loading route param</h4>```

- 9.2 Import the component into the ```App.js```page and display it with some dummy text


```
		<Route path="/:blogs_id" component={BlogCard} /> 
```

Note: Naming convention for params is "/:lower_case_with_underscores". Use the path prop to connect it this stateful child component parent-child)


- 9.3 Go to the browser and test in  ```localhost:3000/1``` change numbers and you should see your loading route param message

- 9.4 In the functional component where you have identified what goes on the card import the HoC Link.  Wrap the JSX tag with the Link HoC and direct it to the id page

```
	<Link to="/:blogs_id">
```
Click the link in the functional component and check the dummy text displays

- 9.5 In the stateful component created to hold the content of this click through link, make your get HTTP request with an id