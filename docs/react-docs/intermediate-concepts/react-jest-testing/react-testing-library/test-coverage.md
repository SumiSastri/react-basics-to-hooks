`$npm test -- --coverage`

Generates in the console a summary report

```
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |      60 |      100 |      60 |      60 |
 App.js   |      60 |      100 |      60 |      60 | 12-14,27
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        6.3 s
Ran all test suites related to changed files.
```

Generates a folder coverage with a lcov-report file

If you open this file in a browser Videorama:([/Users/sastri03/dev/react-basics-to-hooks/progressive-web-apps/videorama/coverage/lcov-report/App.js.html]) You will see highlighted in green what lines have been covered by tests and in pink lines that require further tests
