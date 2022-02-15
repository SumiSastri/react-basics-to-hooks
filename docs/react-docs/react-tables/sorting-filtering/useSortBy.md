Documentation: [https://react-table.tanstack.com/docs/api/useSortBy#usesortby]

Example Code: [https://codesandbox.io/s/github/tannerlinsley/react-table/tree/master/examples/sorting]

CodeEvolution Tutorial: [https://www.youtube.com/watch?v=zypbcG3ZVnc&list=PLC3y8-rFHvwgWTSrDiwmUsl4ZvipOw9Cz&index=6]

**What is the useSortBy hook**

Hooks are the way to implement key features in react. To sort data in columns the `useSortBy` hook is used and imported into the file.

`import { useTable, useSortBy } from "react-table";`

It sorts the data in ascending or descending order based on simple conditional rendering logic. The Column object in the react-tables library is destructured and used for this hook.

```
const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  )
```

It is passed after the other data props.

To use it and render it in the `<th />` tag we need to use pass the param of `column.getSortByToggleProps()` as the argument of the destructured `column.getHeaderProps()`. This then gives us access to the filters for the columns we want to filter`<th {...column.getHeaderProps(column.getSortByToggleProps())}>` nested in a `<span/>` before the closing `<th/>` tag.

The `span` provides the opportunity to conditionally render the span and toggle it from ascending to descending order by clicking the toggle button in the span. The logic to check if the column is ordered in descending order is used to flip it to ascending as it is a nested boolean value that triggers the change. Checking is it sorted and then is it sorted in descending order - it is a string with an icon

```
    <span>
        {column.isSorted
         ? column.isSortedDesc
          ? " Sort Ascending  🔼"
          : " Sort Descending 🔽"
         : 'Click to sort'}
    </span>
```

The challenge with this is the CSS as the pre-provided icon is not visible to the naked eye. The user needs to know that the icon exists to click it. So adding custom CSS or a string helps make it visible.

Sorting and formating

- Dates must be in the ISO date format (not as a string). To format data the date-functions library and look at the docs specifically for date formatting.
