**Note naming conventions are important to ensure the right data is called matching the right table column and row**

**Raw Data**

In a folder called mocks/ mock-data, set up some fake-data in a `.json` format from Mockaroo use the API-endpoint[https://www.mockaroo.com/]. Choose the fields that you want and the number of lines required (5-10 is more than adequate for this demo). You can set up several folders for different categories of data. In this demo-app we have folders for products and users.

The naming convention used is - template-strings for the name of the json file `MOCK_NAME_DATA`
eg: For for users `MOCK_USER_DATA` and for products `MOCK_PRODUCT_DATA`

This `.json` file is the raw data that holds all the information that you need to display in the table/grid of your choice

**Data to be displayed in each column**

In the same mocks folder create a `.js` file with the suffix `_INFO` or `_COLUMN_INFO` to make it clear what this data file contains. This is an array of data that conforms to the way the data is accessed from the react-table API.

There are 2 key-value pairs in the array of objects you are creating in this `.js` file - they are always called Header & accessor. Note the case `Header` is upper case while `accessor` is lower case. They match the key-value pair in the `.json` file data.

Naming convention: Use template-strings for the array of data you are mapping from the json file `USER_TABLE_INFO` and for products `PRODUCT_TABLE_INFO`

Header: The value is the string value of the title on the column header that will be displayed on the ui, Header is upper case. It is the key of the `.json` file
accessor: The value is the information in the rows that match the heading in the column. The accessor property matches the value of key-value pair in `.json` data-file. The accessor is lower case.

As the Header:accessor match the `.json` data, like a `.json` file there can be no duplicate values. Each field must be unique.

The data will appear in exactly the same order as defined in the columns array file, so think about the data order in the display and then create the array.

Assign the data to a variable
Naming covention use the same name as the file name
eg: `USER_TABLE_INFO` and for products `PRODUCT_TABLE_INFO`

An example of the column data array you are creating and exporting in this `.js` file

```
export const USER_TABLE_INFO = [
      {
      Header: 'Id',
      accessor: 'id',
    },
    {
        Header: 'First Name',
        accessor: 'first-name',
      },
      {
        Header: 'Last Name',
        accessor: 'last-name',
      },
]
```
