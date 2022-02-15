**Async-Debounce**

For a table to render, it needs to fetch the data and compile the page. As tables usually are data-heavy with thousands of rows and several data-points, this could take a long time for the page to re-load.

Debouncing the filter functionality is important as re-renders occur on every search letter typed in the global and column filters. It improves performance.

The change handler uses the `asyncDebounce()` method from react-tables. This is a method which adds a `setTimeOut()` method to make the user experience of typing in the search more pleasing. A 0-300 value will make the re-render immediate and jerky, as will a too-short, delay. A gap of 300 - 400 milliseconds smooths out the default re-render of React. A too long timeout (100000 milliseconds) for example will allow the user to type the search but will render the results after a minute or more has passed! See the docs on `asyncDebounce`.
