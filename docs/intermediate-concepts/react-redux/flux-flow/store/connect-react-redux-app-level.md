The purpose of this document is to show how redux integrates with react. Redux is a state management tool for any JavaScript application and can be used with vanilla JavaScript as well as other JavaScript libraries - Vue, j-Query etc.

__How does the redux state management library connect with the react ui library?__

At an app-level react and redux are connected via the library-specific imports.

**Install the following node packages**

```npm install redux react-redux redux-thunk redux-devtools-extension```

Once installed, all the methods of the libraries can be accessed. The higher-order-component - the ```Provider()``` constructor can be imported. The Provider constructor, 'provides' the contents of the store to the App. It is imported into ```App.js``` . A HoC, or higher order component, is a component that returns another component, here the HoC, the provider, returns the store.

```
import { Provider } from 'react-redux';

```
As a higher order component (HoC), it wraps the App with an HoC in the React ```render()``` method. HoC's are components that create components. Here the Provider creates the store as a prop of the Provider constructor and shares it across the App.

```
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					...children
				</div>
			</Provider>
        )
    }
```
At a page level the two libraries are connected via the ```connect()``` method. More detail on how each individual component connects to the app is in the components-and-containers folder in the ```connect-react-redux-page-level.md``` file