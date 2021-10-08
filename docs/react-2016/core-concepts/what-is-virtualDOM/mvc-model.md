The purpose of this documentation is to outline how the MVC - Model-View-Control works with React

__What is the Model View Control?__

MVC or the Model View Control is a pattern that separates 

- the View (HTML with CSS mark-up) what you see 

- the Model is the data (JavaScript)

- the Controller controls the interactions with the model (JavaScript) - eg: the documentQuerySelector

In React each component is independent, it stands on its own and can be composed with other components to build complex user-interfaces.

HTML mark-up(CSS) and JavaScript logic are co-located in the same file. Unlike the separation of concerns where JavaScript, CSS and HTML were in different files.

However HTML-CSS-JavaScript are closely intertwined and to separate them may not be the best option. React recognises the inderdependent nature of these three concerns and encapsulates them in a component.

Take the example of a page which has a heading that is similar in style across other pages, text with a picture - the placement of the text and picture differs across several pages, the page may have a button that is similar in style but not in functionality across pages. The page (container) the button the text (h tag or p tags) can each be a component with separate concerns.

So creating small reusable components - like the heading means it can be used again and again without the same code being repeated across the site - code once use many times.

The separation of concerns therefore should be at component level not at the language level.

```
function Hello() {
	return <div>Hello React!</div>;
}

ReactDOM.render(
  <Hello />, 
  document.getElementById('mountNode'),
);
```
In this functional component the component has one function - to return the JSX div element.

The ReactDOM-API's render method is called. The first argument of the method is to return ```React.createElement()``` in this case the ```<Hello/>``` functional component, the second argument is to render the JSX on the DOM-API by calling the DOM-API method ```document.getElementById()```.

This is considered the React entry point to the real DOM, separating the view from the controller.

**Gotchas**  

- Because react is not concerned with the data loading, storing and only with the display. State becomes crammed into stateful components and often passed in a tangled mess of props into an application.

- MVC does not allow for much thought into the data-flow and architecture which can result in unmanageable gordian-knots of code (spaghetti)



