The purpose of this documentation follows on from the overveiew of the store docs and outlines how to set up the store in a react-redux app. For a theoretical overview of the nature and purpose of the store, refer to ```store.md``` in this folder.

For technical documentation refer to  [https://redux.js.org/api/createstore]]

__Store__
Vanilla store set up
1. Import store from the library/ instantiate store

```
import { createStore} from 'redux';
const store = createStore()
```

2. Reducer tightly coupled with the store (the store gate-keeper only access to store)

Only a rootReducer used in the store ```const store = createStore(rootReducer)```

3. Create actions/ reducers outside the store (see reducer section for how to set up reducers and actions section for how to set up actions)

4. Add the ```store.subscribe()``` method and call the action in this function, for example, ```store.subscribe(incrementCounter())```

You need to run this each time you want to call the function as the subscribe method invokes the function only once. For the understanding of how redux works under the hood it is useful to run this vanilla set-up however, it is more practical to set the store up with middleware. Thunk is only one such tool.

1. Set-up a basic store with middleware
Import methods available from the redux library and the middleware

```
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

```
2. Import the root-reducer
```import rootReducer from 'reducers-file-path';```

3. Initial State is always an empty object by default as programs default to null

```const initialState ={};```

4. Instantiate the methods - store is instatiated and calls the ```createStore()``` method. The method takes in the params - rootReducer, initialState and the middle ware)

```
const initialState = {};
<!-- set as an array -->
const middleware = [ thunk ];
<!-- middleware array used as a spread operator to get all the elements of the array in the middleware -->
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
```
5. Export the store so that it can be imported into other components and check if it exists in redux dev tools/ google console

```
console.log(store);
export default store;
```

6. Set up the subscribe method and check it works

```
store.subscribe(() => console.log(store.getState()));
```

__Final Store Set Up__


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

NOTE: Unlike flux where you can have several stores for each section, with React-Redux there can only be one store for the whole app.