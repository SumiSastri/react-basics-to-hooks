No matter what the testing library is there is a structure most testing libraries follow

- Describe: the test/ it/ describe methods (describes the test that is being conducted) it groups all similar tests into one block with several single assertions within the block. You can also have a child describe block

- Query Nodes: queries/ find methods (query of the dom tree via css selectors and specific query/ render methods)

- Element Selector Hierarchy: - queries ideally should follow user interactions - so query by what the user can see - a checkbox/ radio-button/ paragraph tag. You can query by meta data like aria-labels/ tags but this should not be a priority. Ideally unless you simply have no other way of querying add a data-testid

- Variable assignment: - temporary store of queries that can be reused

- Mock Data: simulations-mocks functions/ event handling

- Assertions: interact with the elements and then run the next methods - expectation/ assertion methods (how the code is expected to run, what the output should be)

Best practice is one assertion per test
