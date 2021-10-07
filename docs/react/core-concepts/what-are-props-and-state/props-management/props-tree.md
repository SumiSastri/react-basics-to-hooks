__What is the props-tree__

As data flows from parent to child, at the top of the props tree is the data that flows to the children (siblings); grand-children (cousins); and all the way down to as many props need the data from the parent.

If the lowest layer needs a prop, then the prop must flow from the top down to every branch in that tree.

This can be confusing and is referred to as prop-drilling or prop-tunnelling.