React tables does not ship with css.

For the whole app the resets are in `App.css` specifically for the table any vanilla CSS may be used - which may be CSS libraries or in this case, vanilla CSS.

Making tables headers/ columns sticky can be changed with CSS and no additional packages required. The `th` tag needs to be accessed and made sticky with a z-index. The position of the `th` tag is relative to the `table` tag

```
/* sticky tables with change in css */
th {
  background-color: rgb(32, 4, 32);
  color: white;
  z-index: 2;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}
```

the z-index needs to be lower than the `th` tag and the position attribute and overflow attributes need to be added.

```
table {
  border-collapse: collapse;
  width: 100%;
  position: relative;
   position: -webkit-relative;
  z-index: 0;
  overflow: auto;
}
```

For cross browser compatibility webkits are used and the overflow as auto in the table ensures that Chrome renders the sticky table correctly.
