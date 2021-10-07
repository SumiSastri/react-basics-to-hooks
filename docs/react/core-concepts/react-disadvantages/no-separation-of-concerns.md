Plural Sight: React the Big Picture : Cory House

**Component only concern - no separation of JS/HTML/CSS files**

Patterns like MVC popularized separating the model, view, and controller into three separate files. This means that the view is HTML. The model declares the data for the view in JavaScript, and the controller controls the interactions with the model.

In contrast, with React, each component is an autonomous concern. Each component stands on its own and can be composed with other components to build rich, complex UIs. This means markup and logic are colocated in the same file.

When React was introduced in 2013, people were very skeptical, and for good reason. React's design ran against the current best practice of placing HTML templates and JavaScript logic in separate files. In React, each component contains both logic and markup in the same file, so on the surface, this feels like it violates the principle of separation of concerns.

However, in React, you think about separation of concerns differently. Traditional separation of concerns often fixates on placing each technology in a separate file. So in web development, this means placing HTML, CSS, and JS in separate files.

But React recognizes that while these are indeed separate technologies, they must be carefully composed together to do anything useful. So in React, each component is a separate concern. Examples include a button, a date picker, an accordion, or a text input. Each of these components is a separate concern. It will often embed logic, styling, and markup concerns because JavaScript, CSS, and JSX work together to create a useful component. Placing intertwined concerns in separate files actually hinders debugging and slows feedback because you have to mentally keep these separate files in sync. And, of course, by composing small, simple components together, you can create more complex components like contact forms, customer details, and so on.

The old mindset of separating HTML, JavaScript, and CSS into separate files merely separated technologies, but their concerns and interactions are actually fundamentally intertwined. If you change one file, it often requires corresponding changes to other files.
