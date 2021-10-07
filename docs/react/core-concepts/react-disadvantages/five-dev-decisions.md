1. development environment
2. trad class-based react or hooks
3. type-management
4. state-management
5. styling

Choose what ever works best for the situation and what is easiest to implement - but here are some guidelines.

1. There are over 100 boilerplate projects available on GitHub to configure your team's React development approach. CRA (create‑react‑app) is the official development environment that's supported by Facebook. This is a mature platform for rapidly creating react applications. This project includes automated testing, transpiling, bundling, linting, and an automated build process all set up and ready to go. And in a poll of over 2000 React developers, 65% use CRA. The next largest group of 25% chooses to build their own dev environment. CRA doesn't include all of your decisions baked in. For example, related libraries like React Router for routing or Redux for state management aren't included in CRA. But you don't need these to get started, so look into these related libraries later.

2. Today most React developers prefer declaring React components as functions. The function syntax is more concise, and it tends to help avoid bugs. Hooks and class-based components can live side-by-side.

3. There are three popular ways to handle types: React PropTypes, TypeScript, and Flow.

With PropTypes, types are checked only at runtime and only during development. TypeScript is the second option. It's a popular project from Microsoft.

TypeScript is a superset of JavaScript that adds strong typing support and compiles down to plain JavaScript.Unlike PropTypes, TypeScript checks types at compile time, so you find out earlier about any potential type issues.

The third option is Flow, a project from Facebook for adding static type checking to your JavaScript. Flow provides type safety in a different way than TypeScript. With Flow, you add type annotations to plain JavaScript, and Flow intelligently infers types throughout your codebase. With Flow, you annotate the top of each file that you'd like it to check. Flow will process plain JavaScript without type annotations, and it will infer those types or, in other words, flow through your code. Flow runs as a separate process, so types can be checked whenever you choose to run Flow.

4. State-management: State is your app's data. Popular ways to handle state in React include plain React, Flux, Redux, and MobX. React handles state great all by itself, so these other libraries are totally optional.

With plain React, your components handle state on their own. But shortly after React was open sourced, Facebook also released Flux as an optional way to handle state in React.

Flux is still heavily used by Facebook, and it centralizes your application's state.

With Redux, your app's data is centralized, but Redux offers a more elegant approach than Flux and uses an immutable data store.

MobX is a lighter weight alternative to Redux, but with a fundamentally different take on state management. MobX uses observable data structures.

Redux is more explicit and scalable, but MobX requires less code and is easier to learn.

5. CSS - are over 50 different styling approaches that you could potentially use with React, but really, React works great with traditional CSS, Sass, and Less too.
