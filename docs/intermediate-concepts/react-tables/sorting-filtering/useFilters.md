Documentation [https://react-table.tanstack.com/docs/api/useFilters#usefilters]
CodeEvolution: [https://www.youtube.com/watch?v=2U9eVClAqh0&list=PLC3y8-rFHvwgWTSrDiwmUsl4ZvipOw9Cz&index=9]

**What is the useFilters hook**

It is the hook that implements row filtering - filtering based upon the data in specific columns. It destructures the Column object in the react-table library and uses its component parts to filter columns and search through individual columns row-by-row.

Global and column filters work very well together.

Create a reusable column filter component. As we are destructuring the Column object, the argument is column.

As the state of the search input in the column is changed by the user input. This reusable component is imported into the parent table component, the `useFilters` hook imported from the react-table library.

The order in which multiple hooks are used from the react-library is important.

The `useFilters` preceeds `useGlobalFilters` and `useSortBy`
The `useGlobalFilters` preceeds `useSortBy`

The documentation does state that this hook can be used either before or after `useGlobalFilter`, depending on the performance characteristics you want to code for.

Columns also need to be memoized. Column filtering memoization applies to every column in the table data. The table data from the constant imported holding this data. What is memoized is the object with the data as a key:value pair.

```
  const defaultColumn = React.useMemo(
    () => ({
      Filter: ColumnSearchFilter,
    }),
    []
  );
```

The filter is now rendered conditionally in the return method.

`<div>{column.canFilter && column.render("Filter")}</div>`

or as a ternery

```
<div>{column.canFilter
? column.render("Filter")
: null}</div>

```

As "Filter" refers to the constants set up in our data file, the reusable component must be imported into the data file

`import { ColumnSearchFilter } from " file path";` and the `Filter` key needs to be added with a value.

```
Filter: ColumnSearchFilter,
disableFilters: true,
```

If you want to disable the column seach filter you need to add the `disableFilters` key. You can not just remove the `Filter` key as the page will not compile, the inbuilt methods throw errors.
