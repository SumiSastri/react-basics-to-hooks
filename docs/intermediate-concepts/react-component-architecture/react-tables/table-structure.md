Tables are somewhat like forms in the sense that they could rely on information pulled into populate the table from an external API, have user input to add/ edit and delete information.

However the key difference is that tables are more complex, follow a grid system of display and hold a lot more data and information groups in a small real-estate of web-page space.

They, by nature have a deeply nested structure to work within. At the top of the table is the parent `div` the `table` which like the `form` element nests all the other elements within in.

- Table container
  - Headers
  - Table body
  - Footers

In terms of elements this is a representation of a basic table - table designs can get more complex with sorting/ filtering and searching as well as adding rows/ hiding columns/ making colums sticky and editing/ deleting rows.

```
<table> Parent ->  getTableProps=()=>{}
      <thead> Table Header -> headerGroups[]
        <tr> Table rows
          <th></th>Table Headings(data)
        </tr>
      </thead>
      <tbody>Body -> getTableBodyProps=()=>{}
        <tr>
          <td></td>Table data
        </tr>
      </tbody>
      <tfoot>Table Footer -> footerGroups[]
        <tr>
          <td> </td>
        </tr>
      </tfoot>
    </table>
```

Each of the props are functions or arrays that are helper utilities that transfer the information from the `.json` and `.js` files into the table elements.

See Headers/ Footers/ Body documents for details.
