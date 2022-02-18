## Steps to create a stateful table and tables with the useTable Hook

Table hooks abstract the factory functions you need to write to render out a table header and rows. To see how tables are created with stateful components, go to the `MusicBuyerTable` component for examples.

It is useful to work on on the stateful rendering with factory function to render the table data first as it will be clear which functions the React Hooks are memoising and abstracting.

Documentation in the readme file in the music-tables folder.

2. Display Page - create a table-groups folder for all the tables you want to display

Naming convention - make clear categories of tables that can be grouped together
product-tables
user-tables

Naming convention:
Within these sub-folders you may have several product tables the first letter in upper-case as it is a constructor creating an instance of the user's/ product's information
eg: `UserTable.js` or `ProductTable.js`

In this repo 2 tables have been created for users and products examples of the code are in the respective folders, to follow as examples.

3. Add headers/ footers

Adding Footers follows the same methodology setting up the data in the `_INFO` files and using the methods available in the ``footerGroups()` suite from the library

Header groups - Group information under a common heading. In the `_INFO` files you add the key groups of information you would like to view as a unit and set up the data first.

4. Add table body
