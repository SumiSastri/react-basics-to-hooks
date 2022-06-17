__Reducer cheat sheet__

- Reducer changes state via pure functions
- The functions written in a reducer determines the changes needed or how state can be mutated - usually done with conditionals (switch) 
- If no change is needed the previous state is returned to the component and no updates are made 
- Root reducer combines all the changes required from multiple reducer functions 
- Pure functions means no api-calls, routing transitions returned in the reducers 
- Functions with dependencies like Math/ date functions (math.random/date.now) can not be passed
- With forms the formReducer() method is used, it is the specialised reducer that gets its information from actions related to higher order components that send the form payloads to the store.
- ONLY A REDUCER CAN PERFORM A STATE CHANGE OPERATION 