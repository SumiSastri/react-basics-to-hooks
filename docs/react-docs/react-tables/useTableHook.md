Table hooks abstract the factory functions you need to write to render out a table header and rows. To see how tables are created with stateful components, go to the `MusicBuyerTable` component for examples.

It is useful to work on on the stateful rendering with factory function to render the table data first as it will be clear which functions the React Hooks are memoising and abstracting.

The `useTable` hook ships with several props that you can use nested in each section of the nested table elements.

Props are either methods or arrays of objects which then can be used to populate headers, the table body - columns and rows - as well as the footer.

The prop functions/ arrays are helper utilities that transfer the information from the `.json` and `.js` files into the table elements.

This is the list for a quick overview. See headers/ body and footers for more detailed information.

`getTableProps()` - getter function called in the `table` element. It is top of the tree of nested elements.

`getHeaderGroupProps()` - gets all the props of the headerGroups func - which are headers
`headerGroups()` - nested in the table head jsx tag maps through an array of header-items
`headers()` - maps through headers

`columns()` - chained to the headers method
`column.render()` - renders the column header cell elements in the table header jsx nested in the table row jsx

`getTableBodyProps()` - getter function called in the `tbody` jsx
`rows()` - nested row cells with an array of elements to map into a row
`prepareRow()` - called to prepare each row and return the table row jsx
`getRowProps()` - called in the table row jsx before you map
`row.cells()` - called after getRowProps called to map individual elements of the array to be rendered in the table row cells
`getCellProps()` - called in the table data jsx and within the table data jsx and then
`cell.render()` - method called to render the individual row cell

`footerGroups()` -
`getFooterGroupProps()`
`footerGroups.headers()`
`columns()`
`columns.render()`
