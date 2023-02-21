The general url [http://localhost:5000/payroll] can also be extended to query by a specific id [http://localhost:5000/payroll/1]

However you may need to query the database in other ways - this is a short summary of how you can search the data using url params.


1. Filter data with `?` spaces are notated by `%20` in the url

http://localhost:5000/payroll?enquiryType=Missing%20Expense

2. Filter nested data with `&` using dot notation `.` as in an object

http://localhost:5000/payroll?enquiryType=Missing%20Expense&expense-sheet.sent=false

3. Sorting ascending by default `desc` needs to be added for descending order

http://localhost:5000/payroll?_sort=enquiryDate
http://localhost:5000/payroll?_sort=enquiryDate&_order=desc

4. Multiple sorts where both ascending and descending order may be required as well as multiple products - enquiries and order comma separated `,` with no spaces. The order will follow the order of the comma-separated query. The queries are `_sort` and `_order`

http://localhost:5000/payroll?_sort=enquiryDate,userName,enquiryType&_order=desc,asc,asc

5. Pagination - improves efficiency, default number of objects on a page is 10, if you want to set size you need to do this explicitly, query is `_page=1` with 2 you will get 2 pages of 10 objects each `&_limit` sets the limit to the number of objects that appear on a page

eg: This gives you the first page of 5 objects and the second query gives you the second page of 5 objects. On page 3 you will get only 2 objects and on page 4 you will get an empty array as there is no more data to display
http://localhost:5000/payroll?_page=1&_limit=5
http://localhost:5000/payroll?_page=2&_limit=5
http://localhost:5000/payroll?_page=3&_limit=5
http://localhost:5000/payroll?_page=4&_limit=5

The query is supported in the Network tab link - you can see it in the `Link` of the network tab in the response header and can be queried with `response.headers.get`

6. Greater than and less than `_gte` and  `_lte` are the queries that can be used to set a range on a particular key-value pair. You can use a nested query with the dot notation as well

http://localhost:5000/payroll?expense-amount.eur_gte=500&expense-amount.eur_lte=6000

7. Text searches `_like=^` operator filters data by the first alphabet and `q=in` queries within a text

8. Parent and child resources embedded in data