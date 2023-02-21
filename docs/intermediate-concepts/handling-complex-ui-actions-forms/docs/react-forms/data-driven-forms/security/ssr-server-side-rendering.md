React components are usually rendered to DOM in the browser, but this process can also happen on the service side. 

We will explore the potential benefits of this approach. Involving the server in rendering content may lead to two types of cross‑site scripting vulnerabilities that we have not seen in previous modules, stored and reflected. 

JSON is a data representation format that is very convenient to use in JavaScript code. Applications often use it to exchange data between server and browser components. 

We will take a look at how the browser parses HTML markup and JavaScript code. We will see how interaction between these two parsers may expose us to the risk of introducing XSS vulnerabilities into our code. The most commonly used React rendering API, ReactDOM.render, transforms React components and element tree into DOM nodes directly in the browser. 

This is convenient and allows developers to implement all the application logic in client‑side JavaScript code. React also provides an alternative API that allows developers to render DOM components on the server side, then send the rendered representation to the client, turn it into DOM nodes, and attach event handlers. This technique is called server‑side rendering, or SSR for short. 

First, the HTML markup is generated on the server and sent to the client. Then the browser turns the markup into DOM nodes, as it normally would. React turns the DOM nodes back into React components representation and attaches event handlers to make the React component functionality working again. This process is known as hydration. 

Rendering React components on the server requires a bit of extra effort, but it has some benefits. The first potential benefit is performance. For applications with complex user interface code and deep component hierarchies, it might be more efficient to perform initial rendering on the server, especially for scenarios where the browser environment is resource constrained, as might be the case of mobile devices. 

The second potential benefit is faster load time of the page. Server‑side rendering allows embedding initial data along with the markup, allowing the browser to build the final DOM representation of the user interface in one go. 

An alternative is to let the browser build the component hierarchy, render the initial user interface, and only then fetch data from the server. The user interface might need to be rendered once again after the data has been fetched from server. 

This architecture may perform slowly on the initial rendering of the application user interface, leading to poor user experience. 
