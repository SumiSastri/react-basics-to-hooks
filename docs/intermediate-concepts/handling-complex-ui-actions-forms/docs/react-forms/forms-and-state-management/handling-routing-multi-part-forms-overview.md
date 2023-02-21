To create a multi-part form, state must persist from one form page to another.

As state is ephemeral even on the component page, to transfer the data from one component to another needs routing.

The React-Router is an additional tool used for routing.

Routing has a few steps

1) Setting up the React-router library and instantiating its methods
2) Creating routes dedicated to the form page (component) and switching from one route to another
3) Creating navigation links between one page and another (can be done via buttons/ links)
4) Using the library's history object to navigate from one page to another the button or link will have an attribute that pushes the data to the next page with the method `history.push()` this is set in the submit handler or in click events on the form page


For a more detailed look there is a dedicated folder on react-routing for forms in this section