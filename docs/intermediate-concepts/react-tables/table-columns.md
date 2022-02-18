4. Columns - Sorting, Searching, Select Rows (Checkboxes),

- `useFilters` searches the columns - data needs to be added to the JSON data file
  Note: Disabling column filtering is done in the data-file
- `useGlobalFilter` searches the whole component page - works with the local search of each column
- `useSortBy` sorts in ascending and descending order
- `useColumnOrder` orders the columns - allows you change the order of display

       - props for columns
       ```
        allColumns,
        getToggleHideAllColumnsProps,
        setColumnOrder,
        ```
