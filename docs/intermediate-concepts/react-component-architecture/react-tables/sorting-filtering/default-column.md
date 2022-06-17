CodeEvolution: [https://www.youtube.com/watch?v=bXq9rmqLqDE&list=PLC3y8-rFHvwgWTSrDiwmUsl4ZvipOw9Cz&index=10]

**What is a default column and how is it useful**

A default column is set and memoized as anything that needs to be applied to all columns can be set as an argument in the default column variable. In addition to using `useFilters` as a hook, setting a default column makes data management easier.

The variable is then added to the props of the useTable hook.

```

} = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useColumnOrder
  );
```

By adding a default column and assigning the data from the "Filter" key-value pair in the table where it is rendered, there is no requirement to explicitly define the data in the constant imported.
