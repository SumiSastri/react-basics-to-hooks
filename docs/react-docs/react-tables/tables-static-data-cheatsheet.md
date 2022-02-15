Step 1: Decide what data you want to display (product tables/ marketing tables/ admin tables/ sales tables) - set-up mock data (see setting-up-data) for this demo in a `.json` format

When thinking about a table structure, you typically have rows which contain columns. While table configurations can get far more complex with nested columns, subrows, etc. for a basic table, define some data that will go into the columns and rows

Step 2: design your table - what columns do you need what are they going to be called and what data do you want in each of these columns

Step 3: use react-table to create an instance of a table that can be rendered into `jsx`

Sub-process

- First memoize your data for better performance with the `useMemo` hook
- Then create an instance of the `useTable` method from the react-table library on the page
- Import the `.json` and the `_INFO.js` files for you Header and accessor

Step 4: create the `jsx` skeleton of a table - each of the tags takes a specific set of props from the react-table object. Some of these props are functions, others are arrays.

```
<table> Parent ->  getTableProps()
      <thead> Header -> headerGroups[]
        <tr>Divisions for rows
          <th></th>Data for header
        </tr>
      </thead>
      <tbody>Body -> getTableBodyProps()
        <tr>
          <td></td>Data for body
        </tr>
      </tbody>
      <tfoot>Footer -> footerGroups[]
        <tr>
          <td> </td>
        </tr>
      </tfoot>
    </table>
```

Step 5: render the data into the table `jsx` elements
This is the the most complex peice of work because each row and cell has its own methods and props. Refer to Headers/ Body/ Footers documents for the detail.

Step 6: design with css
