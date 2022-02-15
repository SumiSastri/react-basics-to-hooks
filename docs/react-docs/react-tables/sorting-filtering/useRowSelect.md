Why?

Rows are required to select a field and send it to the backend. The `useRowSelect` keeps track of the rows selected. Destructure `tableFlatRows` from the table object. This gives you a flat array of rows selected so that you can use array methods to the data. The next method takes the column object as an arguement and returns a flat array of objects. `hooks.visibleColumns.push((columns) => { returns []})`

```
rows,
prepareRow,
selectedFlatRows,
```

Not stateful - the checkbox is a CSS animation
