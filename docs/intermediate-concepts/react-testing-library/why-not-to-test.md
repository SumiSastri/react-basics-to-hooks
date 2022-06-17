From Testing React Components - Plural Sight (Liam McLennan)

1. Obvious tests
2. Overtesting
3. Time spent on testing is an opportunity cost
4. Adding complexity or reducing it? Code, abstractions of code, tooling, different approaches and techniques potentially add complexity to the code base. Only write tests that are needed.
5. Increases feedback loop write-code -> (delays between writing the code and testing that it works slow/long tests -> release -> modify -> start again
6. Refactoring friction in the feedback-loop when writing and testing code can result in long delays or even a build up of short tests in their totality when run slows down the dev process
7. Tests fail when they shouldn't further adding to slow downs in the feedback loop and code progressing into release phase
8. Code rot - old code/ old tests never deleted slows down apps
9. Tests not needed - for example testing implementation rather than logic
10. Difficult to test false negatives(?)
11. Never test the same thing 2 times
12. Never test ui that can be tested in another way(?)