**What is props drilling?**

With the uni-directional flow of data with React (data must flow from parent to child component), props need to be passed down to all the nested components. 

If in a component tree only a few components need props from the parent at the top of the tree, every single component branch on the way down to the components that require the prop need the props manually passed down. This is called prop drilling.

So to render a card from a list the home component holds state of the card in the class component. 

The list component is imported into the home component and props of the state passed to the list. 

The list component renders the whole list. 

The list imports the card component that takes all the props of the list. 

If the props that the card needs from the home component are not passed to the list component, the card component will not have access to state and will not render elements that require props of the state object.
