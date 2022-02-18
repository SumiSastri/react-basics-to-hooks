Traversing the table tree and using the methods in the table instance to render the table headers:

`<table>` Parent object that needs to be destructured and called in the `<table/>` tag
`<table {...getTableProps()}>` gives you access to all the methods of the table instance that are described in the typeScript index as `table: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;`

This at a high level describes the tree of nodes that this instance of the `useTable` Hook traverses.

At the next level down the `<table/>` tree is the `<thead>` tag or the table header.
`headerGroups[]` map data into nested `<thead/>` tag for the table headers
`headerGroup.getHeaderGroupProps()` is spread and called in the `<tr/>` tag for the table rows
`headers[]` - array of headers.
`...column.getHeaderProps()` is spread and called in the `<th/>` heading tag and the render method is called to render the "Header" from the file in your `.js` mock-data file.

`headerGroups[]` - an array of items - as described in the typeScript index `headerGroups: Array<HeaderGroup<D>>;` They can be several groups of headers

`HeaderGroup` described in the typeScript index `HeaderGroup<D extends object = {}> extends ColumnInstance<D>, UseTableHeaderGroupProps<D> {}` by destructuring this to access the getter function

`getHeaderGroupProps()` - nested in the HeaderGroup gets all the props of the headerGroups func - which are headers. estructuring this into its component elements in the table rows
`<tr {...headerGroup.getHeaderGroupProps()}>`

The spread operator gives you access to the `headers[]` - array of headers and the columns in the table - by following the same pattern you spread the `column` (note singular) object which is then spread in the `<th/>` heading tag (not to be confused with `<thead/>` which is 2 levels up the tree). This gives you access to the `column.render()` method as well which finally renders the basic header data `<th {...column.getHeaderProps()}>{column.render("Header")}</th>`.

See the `TableHeader` file and follow CodeEvolution module: [https://www.youtube.com/watch?v=hson9BXU9F8&list=PLC3y8-rFHvwgWTSrDiwmUsl4ZvipOw9Cz&index=3]

To make headers sticky - see docs on `tables-markdown-css` as headers can be made sticky based on pure vanilla css.
