__What is a root-reducer?__

- Several reducers can be combined into a single root reducer with the ```combineReducers()``` method.

- The ```combineReducers(){}``` method for the root reducer, calls all child reducers and gathers their result into one function, keys of the action correspond to the keys of the passed reducer function
