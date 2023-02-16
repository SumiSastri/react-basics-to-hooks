### What does the useEffect Hook do?

Documentation [https://reactjs.org/docs/hooks-effect.html]

Everytime you want to access the DOM and clean up after accessing the DOM (setting and clearing intervals, getting data when the component mounts and then unmounting components after async API calls, setting and clearing event listeners, etc. ) `useEffect()` can be used.

The hook makes the code for dealing with side effects more efficient as it handles 3 life-cyle methods at the same time - the mounting, updating and destroying life-cycles of the component.

To summarise, `useEffect()` works best when you want to

- Update the DOM
- Fetch data from an API end-point
- Set up subscriptions
- Set up timers

With class based methods these are done in the life-cycle methods rather than in the render methods. These are the three life-cycle methods that the `useEffect` Hook handles.

`componentDidMount` - sets up the timer(setInterval)/ button with initial state
`componentDidUpdate` - button to update state (event handlers)
`componentWillUnmount` - destroys timer (clearInterval)

Tutorials:
Leigh Halliday [https://www.youtube.com/watch?v=_TleXX0mxaY]
