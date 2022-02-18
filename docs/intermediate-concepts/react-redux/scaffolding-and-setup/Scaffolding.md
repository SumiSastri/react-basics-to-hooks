## Scaffolding cheat sheet

__Library imports__

``` npm i redux react-redux redux-thunk -- save``` or ```yarn add redux react-redux redux-thunk```

__Configure the store__

More detail is in the ```store-setup.md``` file this is a cheat-sheet with the final boiler-plate version.


```
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from 'name of root reducer file path';

const initialState = {};
const middleware = [ thunk ];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
console.log(store);
store.subscribe(() => console.log(store.getState()));

export default store;
```

__Configure the Root-reducer__

```
import { combineReducers } from 'redux';

import SectionRootReducer1 from 'SectionRootReducer-filepath1';
import SectionRootReducer2 from 'SectionRootReducer-filepath2';

export default combineReducers({
	SectionRootReducer1: SectionRootReducer1,
	SectionRootReducer2: SectionRootReducer2
});

```

__Configure App.js flux flow__

1. Use the HoC Provider to distribute store as a prop 
2. Configure any authenticated routes
3. Import the auth into the App component and change component to stateful adding the auth action-creator in the ```componentDidMount()``` life-cycle method.

```
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from 'filepath of store';
// Authentication - runs constantly on component mounting
// used in pages to identify private/auth pages vs public routes
import { loadAuthUser } from 'action-creator file path';

class App extends Component {
	componentDidMount() {
		store.dispatch(loadAuthUser);
	}
	render() {
		return (
			<Provider store={store}>
				<div className="App">
				</div>
			</Provider>
		);
	}
}
export default App;
```

__Configure the section flux flow__

1. Actions (types and utility functions)
2. Components with ```connect(mapStateToProps()()``` methods
3. Reducers with state update switch statements
4. Reducers to section root reducer and section root reducer to app root reducer
5. Test a simple boolean - loading items for the component state and then proceed with upating each component that needs to subscribe to the change



