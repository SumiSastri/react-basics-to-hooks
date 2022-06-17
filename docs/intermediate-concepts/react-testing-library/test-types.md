Documentation: https://testing-library.com/docs/

- manual testing (a visual check that the feature works as intended)/ console checks

- unit tests (each unit is tested with a variety of testing libraries depending on the language and the application) done in isolation. Each component/ code block being tested in isolation is a classic example. Can write several of these - good for functional programming/ unit does not depend on any other code block

- integration testing goes one step further to check not just one component isolation but 2 or more components on the same page. Dependent on other functions/ parts of the App
  See Net Ninja video on the topic: [https://www.youtube.com/watch?v=6wbnwsKrnYU&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&index=11]
  Follow user flows and combine a series of tests in one describe block Traversy Media describes this well [https://www.youtube.com/watch?v=OVNjsIto9xM]
  Can write a few that are dependent on each other that checks a flow

- end-to-end testing ( the whole journey of the feature from front end ui-ux) - routing/ navigation from one page to another in the app as well as back-end API calls CRUD routes - Cypress via the browser the last 25 minutes of the video covers this Traversy Media Youtube tute: [https://www.youtube.com/watch?v=OVNjsIto9xM] Write very few - to ensure all moving parts work with external dependencies

CodeAhoy: [https://codeahoy.com/2016/07/05/unit-integration-and-end-to-end-tests-finding-the-right-balance/]
Infoq: [https://www.infoq.com/articles/balancing-unit-and-end-to-end-tests/]

- stress-testing - sometimes for security - white hat hacks to test a component's robustness

- smoke-testing/ acceptance testing - quick tests with new features to determine whether further testing is required
  [https://www.guru99.com/smoke-testing.html] done at the build stage by QA teams to check software stability and criticial functionality

- sanity testing - checks the logic and rationality - mainly done by testers not developers/ checks for bug fixes/ not necissarily documented - sent back to coder to fix

[https://www.guru99.com/smoke-sanity-testing.html]

- chaos testing
- security testing
- regression testing