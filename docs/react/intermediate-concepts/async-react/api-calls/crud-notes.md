#### Appendix -3: - my notes on CRUD

*  How do requests work?
- Via methods - GET, POST, PUT, DELETE.
GET - get documents and files from the server
POST - Post the data from the browser to the database in the server
PUT - Update the data from the browser with the new information in the server
DELETE - Delete the information sent from the browser in the database

- Via query-strings - after the URL with a question mark, there are query string parameters in key-value pairs

- Via the body of the request - you can see the request headers are encoded in the headers tab in network but you can still see all the data in the body of the request in the browser

- Via encrypted - HTTPS requests - only client-server share information in a secure way

* How do responses work - Debugging 
To see this request-response pattern in the console, you can go to the "Network" tab.
- GO TO Server Status
The response that the server sends back is the HTTP server status messages 
Documentation [https://www.w3schools.com/tags/ref_httpmessages.asp]
100 series - information [ 100 continue - server has received headers, send the request body, 101 request to switch protocols from requester, 103 resume aborted PUT or POST requests]
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

* More resources:

MDN documentation[https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work] 
A good YouTube Video:  [https://www.youtube.com/watch?v=7_LPdttKXPc]

CREATE ONE NEW - POST -201 
createRoute is the function (Create) GET
Status is 201
Export the route 
Catch the error
In the config create the router set up
Then go to Insomnia (or your base url path)
Do a post request
Create the new animal object
Send
Booleans and numbers do not need inverted commas and boolean is lowercase
Create is a get request and a post

SHOW ONE - WITH ID - GET REQUEST - 200
showRoute() is the function
Show - get request and a post (Request and Show)
Status is 200 (ok)
Get the id
.findById(req.params.id) you do not the the exact id because you have already clocked them in other pathways
You need base_url/api/animals/5c87a2839f9ea114c58d524c
For all the id requests in router
router.route('/animals/:id')
  .get(animals.show)


EDIT AND UPDATE   - PUT 202
Find by Id and update one
In Insomnia - create object and only update key:value required to update


FIND  AND DELETE   - DELETE 204
Find by Id and delete one
Blow up one (by Id) Blow up all (Delete)
In Insomnia - remove all info and send