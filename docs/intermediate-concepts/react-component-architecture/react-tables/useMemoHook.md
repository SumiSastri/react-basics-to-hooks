Memoization is an optimization technique which passes a complex function to be memoized (stored in memory). In memoization, the result is “remembered” when the same parameters are passed-in subsequently.

On a component re-render, the function won’t re-run but instead return the stored result. With every re-render the compiled code will re-calculate all the columns/ rows / re-create the data imports and re-render the page which is an expensive use of memory. Therefore memoization is highly recommended.

This can be optimal if the wrapped function is large and expensive. That is the primary use for the `useMemo` object.

- More about useMemo [https://www.robinwieruch.de/react-usememo-hook]
- When not to use the useMemo hook [https://blog.logrocket.com/rethinking-hooks-memoization/]
- A quick tutorial [https://www.digitalocean.com/community/tutorials/react-usememo]

Create two variables called columns and data and memoize them. The `useMemo()` method takes a function as its first argument and an array as the second. The second array is an empty dependency array as the API is being called with the `useEffect` hook in React. It is an empty array to indicate that the code does not need to re-calculate the data and re-render the page.

The variables must only be called columns and data as these variables are reassigned for use by the `useTable` hook. They represent your raw data in the `.json` file and the data you want to render in the columns in the `_INFO.js` file

```
const columns = useMemo(() => USER_TABLE_INFO, [])
const data = useMemo(() => MOCK_USER_DATA, [])
```

Columns also need to be memoized. Column filtering memoization applies to every column in the table data. The table data from the constant imported holding this data. What is memoized is the object with the data as a key:value pair.

```
  const defaultColumn = React.useMemo(
    () => ({
      Filter: ColumnSearchFilter,
    }),
    []
  );
```
