Footers can be created exactly in the same way headers are created - often they are a mirror image of each other for ux reasons - when the user scrolls to the bottom of the page, if the table is not sticky then the footer gives them the indication of where the page ends.

The methods are slightly different but the design pattern is the same. From the table instance the right set of methods/ arrays are destructured and used in the nested footer tags.

```
<table {...getTableProps()}>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
```

It is good to set up the Header and then the footer to get an idea of how the methods/ arrays work.

Review tutorial from CodeEvolution: [https://www.youtube.com/watch?v=CQ165vFGLVs&list=PLC3y8-rFHvwgWTSrDiwmUsl4ZvipOw9Cz&index=4]
