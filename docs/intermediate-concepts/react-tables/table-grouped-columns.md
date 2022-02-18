To group headers into categories at a top-level, the data needs to be reordered as arrays with nested objects that can be accessed by mapping through the groupings.

1. Decide what your grouping is and what you want to call each group
2. Recreate your Heading of the Header/ Footer with the name of the grouping
3. Create a columns array with the data objects nested in them with the Header/ Footer and their accessors

```
{
   Header: "Contact Details",
   columns: [
     {
       Header: "Mobile Phone",
       accessor: "phone-number",
     },
     {
       Header: "Email",
       accessor: "email-address",
     },
   ],
 },
```

4. Replace the imported data with the file with the grouping. You can keep all your data in one file or split them up - or call the data from an API.
