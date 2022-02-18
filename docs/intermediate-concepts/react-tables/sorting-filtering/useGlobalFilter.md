Documentation[https://react-table.tanstack.com/docs/api/useGlobalFilter#useglobalfilter]

**What is the useGlobalFilters hook**

Filtering to search the entire table with a general word-search requires the use of the `useGlobalFilter` hook.

An input component that changes with the search input from the user must be created. This reusable component is imported into the table you require to search.

The jsx without any logic is a simple input tag.

The form input has a value which changes with the user search input, so the input field has the event handler props plus the initial value of an empty string that changes.

```
  <input
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
            placeholder={placeholders}
          }}
        />
```

The change handler uses the `asyncDebounce()` method from react-tables. This is a method which adds a `setTimeOut()` method to make the user experience of typing in the search more pleasing.

A 0 value will make the re-render immediate and jerky, as will a too-short, delay. You want to allow the user finish typing so after a few keystrokes then the search filtering occurs. It is more efficient as well.

A gap of 100 - 200 milliseconds smooths out the default re-render of React. A too long timeout (100000 milliseconds) for example will allow the user to type the search but will render the results after a minute or more has passed! See the docs on `asyncDebounce`.

Step: 2 is to import this reusable component into the table you want to filter with its props.

The `useGlobalFilter` hook order is important, it is declared above the `useSortBy` hook if both methods are present in the table. This adds a bit of a CSS challenge in the look and feel of the column headers which can be sorted out with CSS (not covered in this demo).

As the state of this input changes add state to the table so that the user may add input to the state of the input to change state (by typing in a search query) and the `setGlobalFilter` that changes this state and is defined in the reusable component.

```
state,
setGlobalFilter,
```

To render the component, destructure state before the return statement `const { globalFilter } = state;`

and after the return statement add the reusable component and its props in the parent table in the render method above the whole table with placeholder text to aid the user to search/ or an icon to indicate this is a search input.

```
      <GlobalSearchFilter
          placeholder="Search our menu"
          filter={globalFilter}
          setFilter={setGlobalFilter}
        />
```
