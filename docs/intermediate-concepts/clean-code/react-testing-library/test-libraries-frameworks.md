The software that we use to automate the running of tests is called the testing framework.Each framework has its own conventions and functions for how it organizes tests and the language you use to define tests.

Automated tests are run using something called a test runner. Software testing requires at least two different things--the test automation functionality and the assertion functionality. Some frameworks such as Jasmine and Jest include both pieces. Other frameworks such as Mocha allow you to use any assertion library you like. Examples of assertion libraries include Chai, Should(js), and Assert.js.

- jest (a javascript testing library that is inbuilt into React-testing library)
- enzyme (another javascript testing library) -> helps shallow rendering of components/ nested components
- react testing library (ships with create react app) no need to add it to the project as a separate library - has its own eco system of packages within the library
- cypress testing (end-to-end testing in the browser)
- puppeteer (end-to-end testing)
- mocha and chai (unit testing libraries) QUnit