## What is CRUD?

Requests via the REST API calls work with 4 verbs that define the methods of the REST API requests to the server

1.  GET - get documents and files from the backend databases/ cloud storage
2.  POST - Post the data from the front-end browsers (cached data) via a network call to the backend dbs/ cloud stoage
3.  PUT - Update the data, a call is sent to the backend and the data available is returned, this data now can be updated in the browser/ front end and sent back to the backend to be stored
4.  DELETE - Delete the information sent from the frontend to the backend dbs/ cloud storage

The query is sent via query-strings - after the URL with a question mark there are query string parameters in key-value pairs

- Via the body of the request - you can see the request headers are encoded in the headers tab in network but you can still see all the data in the body of the request in the browser

- Via encrypted - HTTPS requests - only client-server share information in a secure way

DEBUGGING NETWORK ERRORS:

To see this request-response pattern in the console, you can go to the "Network" tab.
- GO TO Server Status
The response that the server sends back is the HTTP server status messages 
Documentation [https://www.w3schools.com/tags/ref_httpmessages.asp]
100 series - information [ 100 continue - server has received headers, send the request body,101 request to switch protocols from requester, 103 resume aborted PUT or POST requests]
200 series - success messages [ 200 successful response, 201 new resource created, 202, request accepted for processing - processing not completed]
300 series - redirects [307 temporary redirect, 301 moved permanently]
400 series - client errors messages from browser (404 not found, 403 forbidden, 401 unathorised)
500 series - server errors messages from servers [500 internal server error, 502 bad gateway, 504 gateway timeout]

- GO TO  Headers
 - request url
 - request method
 - server status dode
 - remote (IP) address
 - response headers - content type
 - request headers

- GO TO Response  - you can see the document type and the body of the request sent in HTTP this is open and visible to anyone who looks at the network tab, therefore sensitive information now is only sent via HTTPS requests

More resources:

MDN documentation[https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work] 
A good YouTube Video:  [https://www.youtube.com/watch?v=7_LPdttKXPc]
