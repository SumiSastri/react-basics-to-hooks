In web applications, there are generally a few things that need to be tested. Does it render? And does it produce the desired output? So does it render how you want it to render? Does it handle events as expected? Do all the conditionals of the if/thens and loops work as expected? Are edge cases handled appropriately? A short checklist of what to test:-

1. High value features
2. Edge cases in high-value features
3. High dependency features
4. High risk features/ code (brittle/ likely to break)
5. Component static rendering/ dynamic conditional rendering
6. Component dynamic changes - user inputs / event handling
7. Utility functions
8. Data calls
9. Authentication (user-login-logout-access to parts of the site)
10. State-management tools/ custom Hooks (not the implementation of these but functionality)

- test-coverage - making sure 100 percent of the code written is covered with appropriate tests
