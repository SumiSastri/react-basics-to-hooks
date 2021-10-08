Plural Sight: Designing React Components: Peter Kellner

The main aim of a React app is to pass data from a parent component to children component. To make the right decisions on how to create a component library and improve the architecture of your front-end app it is always good to start with a visual idea of what your app looks like - the ui-ux/ number of pages/ how the pages link to each other and what you want the user to see and how you want the user to interact with the app. Here are some guidelines to creating and designing your app.

1. Have a rough wireframe/ design of what a page (s) will look like
2. Break each page up into what could be reusable components on other pages
3. Look at elements that are likely to be unique to the page
4. Understand what data is required/ and if this data changes the behaviour of the page - dynamic pages things that change with user input (state is required for dynamic changes and mutability). If data does not change and is immutable you can create props that can be passed down to increase flexibility and re-use. Props can also contain methods so there is some level of dynamic data change in the component definition as well as the call with props.
5. Create the independent, reasonable components in a component library as the primary building blocks that when combined together create a UI and easy building/ scaling of the app
6. With the data create constants/ mock-data files that you can import into the page as required
7. Create re-usable utility functions which can be imported with the view to keeping code DRY (do not repeat yourself) make a component/ constants/ utility functions once and use them over and over again
8. With components, the goal is not just to chop things up into the smallest piece as possible, but to think about the value of the individual component and the problems it solves in the app - does it reduce or add to complexity? Does it add complexity with no benefit?
9. What static assets are needed? Photos/ text?
10. How are you going to add mark-down (what CSS framework?)
11. How are you going to manage the dynamic changing parts of the app (state management)
12. How are you going to de-bug and maintain code?
13. What testing framework are you going to use to maintain your app?
14. How are you going to manage types (debugging)
15. Outline and map a nested tree of components in the page (what imports do the page require - what modules or components make up the building block of your page?)
16. How are you going to uniquely identify data sets - data-testIds/ vs. CSS ids
