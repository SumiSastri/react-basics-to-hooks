Date functions is a library that helps formating dates from ISO format to a more user friendly format with the use of functions.

Documentation: [https://date-fns.org/]

With react-tables in the data set up, in the constants file that holds the data for the columns, the library needs to be imported and the cell where the function is called to set the format.

```
Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy')
    }
```

If you want to set it to the US-standard format:

```
Cell: ({ value }) => {
      return format(new Date(value), 'yyyy/MM/dd')
    }
```
