The purpose of this documentation is to help understand the sequence of steps needed to introduce redux into a react app.


__Store setup__

It the practice to set up store first, it is both the starting and ending point of the journey of lifting state.

The store dispatches these changes to the components so the cycle of finding out whether your component has updated with the changes you have set up will not fire unless this loop is completed.

The conundrum is if you set up store, you do not have your root-reducer and you do not have your components asking for changes, moving state out of the component into actions-action-types and action-creators. The reducer has not updated state so your component will not fire any changes.

To ensure the set up is working, set up a demo process with a single test-component, write a single action-action-type and action creator, pass this to a single reducer forward this to a root-reducer, now you can set up store with the root reducer and set-up the test process.

Add components/ sections following this sequence - follow the data-flow and it becomes easier to follow the react-redux library.

I have followed several tutorials where each of these steps is done separately, non-sequentially and it has been confusing for me to understand where the process starts and ends.

The reason is it is a circular and continuous process and therefore it is not easy to say the process starts with the component state or ends with the store.

However, logically for me, if the user does not interact with the component, then there is no change required. Therefore, to me the logical first step is the component-ui, changes there and how the data held locally in the component state is moved out of this position into the store.

__Component-containers__

The complexity and frequency of changes in the component-container state is managed more efficiently with redux as an application scales.

The most important part of FE-design is the actual ui-ux design and the wireframing of the look-and-feel of the components before coding commences.

User journeys should be mapped and brand-books created to your personal requirements.

The ui-ux for a ToDos section is outlined here [https://docs.google.com/drawings/d/1FlbKJrreGEvBpsK_tfcj8h1gSbcuHR884zsaeVx04PQ/edit?usp=sharing]

In your app then set up the folder structure based on a similar design road-map.

__Folder Structure __

Ensure separation of concerns in your folder structure

1. Separate out the stateful vs. presentational components.
2. Design the presentational components and render them
3. Design your main stateful component and render it correctly (demoHomePageStage1.js)
4. Refactor and pass state down to the components that require state for presentational purposes
     Home -> List -> Card 
     Common/ Errors
5. Consider what functions you want to write to interact with this section - create a new to-do? edit and update an existing toDo? deleted a toDo? Show or hide some content? Add a counter?

List the functions in your component pages without writing the function body. In vanilla react these will use the ```setState()``` method to update state, in a functional component props will be rendered.

```
	createToDos = () => {};
	updateToDos = () => {};
	deleteToDos = () => {};
```

If you are using hooks destructure the state object required in an array.

```

```     

If you have legacy react-pages that need to be refactored follow the steps in this next section.

__Refactor React Stateful Components and Lift State__


__Actions__ 
1. Set up action types based on these changes you anticipate (string constants in an actions-types file or folder)
2. Write utility action functions that change the component state (in an action creators file or folder)
3. Identify the actions (payloads) required to be dispatched that will change and update the component-container-state to the reducers as the action is a JSON object that holds only 2 values - the ```action.type``` and the ```action.payload```
4. Dispatch these actions with the ```dispatch()``` method. __Note__The dispatch method can be written here with middleware removing this method from the store and applying it in the component actions.

5. Once the utility functions have been moved out of the component and refactored as action-creators, they need to be imported back into the component and passed as an argument of the ```mapStateToStore()``` and ```connect()``` methods. 

Import these actions into the components-containers and use the ```mapStateToStore()``` method with the ```connect()``` method to connect the actions, action-type-constants and action creators to the redux library. 

Only the actions have the instructions of the type and payload (changes to the ui) are connected to the store.

__Note__ You can also use the ```mapDispatchToStore()``` method here if you do not want to dispatch the actions from the actions creators file.

__Reducers__
Only the reducers can change state. The ```setState()``` method now is replaced by the methods and conditions in a reducer.

1. Set up Reducers - import the action-type constants, import state from store
2.  The reducer is tightly coupled with the store. The information in the reducer is forwarded to the store. 

Each component may have its own reducer or a section may have one reducer. The app may have several reducers.

Combine all reducers to a single root reducer. Only the root reducer should be passed into the store to update the store state.

Initial state is moved from the component to the reducer.

The first render is this initial state. The actions that change this state with the switch conditions written in the reducer and the updated state results in the 2nd render once the component has mounted.

__to-do__ research this as render methods are consistently failing on 2nd render


