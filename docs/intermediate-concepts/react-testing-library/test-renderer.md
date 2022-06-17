From Testing React Components - Plural Sight (Liam McLennan)
Documentation: https://testing-library.com/docs/

- no dependency on DOM, simulates rendering
- component hierarchy abstracted and rendered - components and their props are abstracted so no need to traverse the DOM-tree
- A more realistic testing environment that is closer to how uses will experience your application.
- Ships with method `create()` - which can be used `TestRender.create(<JSXElement/>).root` assign the root of the tree to a variable and then you can use other methods - `findAllByType()`, `findByProps()` by chaining your variable to these methods eg: if your variable is called `root` then `root.findAll()`