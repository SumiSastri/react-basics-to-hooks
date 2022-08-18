The purpose of this documentation is to outline the React-Router history property and how it works in a React application.

https://www.npmjs.com/package/history
npm install history
// history.js
import { createBrowserHistory } from 'history'

export default createBrowserHistory({
  /* pass a configuration object here if needed */
})
Then, instead of using one of the built-in routers, you would use the <Router> component.

// index.js
import { Router } from 'react-router-dom'
import history from './history'
import App from './App'

ReactDOM.render((
  <Router history={history}>
    <App />
  </Router>
), holder)
// some-other-file.js
import history from './history'
history.push('/go-here')

**What is the history object**
The history object is a method of the React-Router Object that ships with the React-Router library. If a path is wrapped with a Route HoC, the props of the Route HoC is passed down to the component. It is only passed one level deep.

In a stateful component you can log the props of the constructor method to find the React-Router props.

```
	constructor(props) {
		super(props);
		console.log(`logs todoshome props`, this.props);
```

You can do the same with a presentational component but you must explicitly pass props as a param of the component - 
const FunctionalComponent = (props) => {
	console.log(`logs funcitonalComponent props,` props)
}


__History Object methods__

The history object when you log it, ships with its own methods.

For example, ```history.location()```. This method gives you the location of the page  you are on and its unique resource locator (url) ```/hip-hop-blogs/:blogs_id```


```
history:
action: "POP"
block: ƒ block(prompt)
createHref: ƒ createHref(location)
go: ƒ go(n)
goBack: ƒ goBack()
goForward: ƒ goForward()
length: 20
listen: ƒ listen(listener)
location: {pathname: "/hip-hop-blogs/:blogs_id", search: "", hash: "", state: undefined, key: "p2ljdt"}
push: ƒ push(path, state)
replace: ƒ replace(path, state)
```

To re-direct the ```history.push()``` - by finding the current location you can decide the location that you want the user to move to when they click on the page.

The location from the home-page on-click can go to a section page.


```
<Button onClick={() => props.history.push('/hip-hop-blogs')} color="warning">
				Go to Blog Page
			</Button>
```    

__Challenges with Browser History__


createBrowserHistory() method

StackOverflow debugging:
https://stackoverflow.com/questions/42672842/how-to-get-history-on-react-router-v4

