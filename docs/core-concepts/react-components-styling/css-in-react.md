Layout in the browser is what CSS offers. But with React, which uses JSX and has only one root HTML element where the rendering happens CSS with React has opportunities and draw-backs.

JSX is JavaScript so CSS has to be modified for a React-App.

Challenges - react hacks to solve these challenges

1. Global namespace - everything is global by default, so local state changes for layout can be repetitive. 
2. Dependencies - React gives you `className` as a prop with a local selector option for `jsx`
3. Dead code elimination - can not remove unused styles from a repo
4. Minification - payloads being shrunk with vanilla CSS need a transpiler with React - the JS is minified or CSS in JSX
5. Sharing constants 
6. Non-deterministic - last style on a cascading sheet overrides earlier ui so a h1 at a top of a page and local page can change the look and feel
7. Isolation

Solutions
Must rovide encapsulation of a style for a specific purpose, code sharing, isolated, explicit, no dependencies to other libraries

1. CSS in JSX - allows media queries & animations
Libraries - styled-components, emption, aphrodite, chakra, glamor, styled-jsx, radium, bulma, reactstrap, astroturf, less, tachyons, bootstrap (some - many, many more)
Challenges - choice of libraries, cost of encapsulation - styles have their own attributes according to library and can not be overridden
2. Inline styles (overrides everything)
cascading styles overrides - so good for short-simple styling, media queries, pseudo selectors & css animations (hover states/ animatons not possible in-line)
3. CSS style sheets imported into the `className` prop of `jsx`
Has all the challenges listed above (1-7) all styles show up in the global namespace
4. CSS modules