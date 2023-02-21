Sometimes developers bypass React to directly access the DOM - this can lead to security vulnerabilities. This can happen when refs or forward refs are used.

 Dynamically parsing React components may allow attackers to inject code into your application. 
 
 Certain application functions require HTML markup to be rendered dynamically in the browser based on user input. The DOM allows an easy implementation of such functionality through properties such as innerHTML. This should be used with caution.
 
 InnerHTML with untrusted input can lead to XSS bugs. React warns developers about this by exposing the innerHTML property under a special name: dangerouslySetInnerHTML. If we can't eliminate this functionality from the code, we need to sanitize the rendered markup to remove or disarm potentially dangerous elements and prevent security vulnerabilities. 
 
 React can protect developers from a lot of mistakes by wrapping the browser DOM. Some React features, such as refs, allow developers to gain direct access to DOM nodes. 
 
 This puts developers back in charge of security of their code. Parsing React components fetched dynamically from the server may allow us to write very flexible and dynamic code, but it also opens up a path to code injection attacks running in the browser. 
 
 Dynamic rendering of HTML markup in browser code may be useful in two major scenarios. The first one is when we want to allow users of our application to submit rich content and then render that content as HTML. 
 
Markdown, rich text editors in web email clients or forum systems are some of the use cases. 

We usually don't want to allow all HTML tags. We want to allow tags that can be used to style text and embed media, but we want to avoid tags such as script that can easily be used to launch XSS attacks. 

The second scenario is integration. Sometimes we exchange data with other systems and applications, and we may need to display such data to our users. If this display data is HTML and comes from an untrusted source or is built based on untrusted data, we are exposed to the risk of XSS attacks. 

The name of dangerouslySetInnerHTML was chosen deliberately to warn developers against using it and make it easier to find potential security vulnerabilities in code reviews. 

Implementing HTML sanitization to make it safe to render using dangerouslySetInnerHTML is a very hard task, and it is recommended to use a trusted library to do it for us. 

DOMPurify is one of the most popular libraries in this space. It was created by a team of experts and has been extensively tested. The core functionality of DOMPurify is to take any untrusted HTML markup and transform it into HTML that is safe to render without running into risk of a cross‑site scripting attack. It has a very simple API. 

It takes a string as an input parameter and it returns another string as a result. Browser support is one of the reasons sanitization is a hard problem to solve. 

DOMPurify has been tested with and maintains compatibility with all the modern browsers. If you need to sanitize markup on the server, Node.js is also supported. 

You can run DOMPurify on jsdom, a pure JavaScript implementation of the DOM API. Sanitizing data with DOMPurify introduces minimal performance overhead, but it will be negligible in most cases. 

Prototype pollution is a type of vulnerability that is prevalent in JavaScript code. It can allow attackers to modify the JavaScript environment and disable other security protections. 

DOMPurify is safe to use even in applications affected by such an attack. Sanitize all dynamically rendered HTML using a library such as DOMPurify. Ideally, enforce this rule in code review checklists and lending rules. This is very likely to save you from DOM XSS vulnerabilities. 

To use the library, the first step is to install DOMPurify using npm install.  

For markdown, there is also the option to use Markdown, text rich libraries like React MarkDown.

Dynamic rendering of HTML content may be necessary to deliver great user experience, but it may also be a risk and lead to cross‑site scripting vulnerabilities. DOMPurify is a robust sanitization library that can significantly reduce the risk of XSS attacks. Refs are an advanced mechanism in React that gives developers direct access to the DOM API. It prevents React from protecting your code from vulnerabilities. Parsing React components from HTML is another pattern prone to XSS, and it should be avoided.