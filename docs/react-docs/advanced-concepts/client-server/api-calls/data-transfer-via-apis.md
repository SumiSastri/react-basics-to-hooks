# What is an Application Programming Interface (API)

Application Programming Interfaces allow a transfer of data (resources) from the client data-layer to servers. Servers then transfer this information to downstream backend operations - data validation, data storage, data transformation, etc.

Data is transported in JavaScript Object Notation`.json` files or .`.xml` files.

## Simple Object Access Protocol (SOAP) vs. Representational State Transfer (REST)?

SOAP is an acryonym for Simple Object Access Protocol while REST is an acryonynm for Representational State Transfer (REST).

Both are Application Protocol Interfaces that enter into the cycle of calling, posting, updating and deleting data during the client-server request-response cyle is also called the CRUD cycle - Create, Read, Update, Delete.

API's call the data from the database, posts this data by interacting with the data-layer on the client-side of the application and displaying or updating it on the web-page.

SOAP, initially created by Microsoft, is a more rigid way of accessing databases. SOAP relies on `.xml` files to call data while REST on `.json`.

SOAP works better with legacy systems such as the Distributed Component Object Model (DCOM) and Common Object Request Broker Architecture (CORBA).

SOAP is a more rigid system that is intolerant of errors. However, SOAP processes can be automated and can be used with STMP (simple mail transfer protocol) as well as HTTP (hyper-text-transfer-protocol), which means data can be transfered not just to the web but via electronic mail systems.

REST is light-weight because of `.json` files and JavaScript developers prefer REST to SOAP as a significant amount of code needs ot be written to transform `.xml` data.

In the CRUD cycle, REST has only four easy to memorise methods that describe everything that the API call does - get, post, put and delete.

The methods represent the current state of the object - that is where the name Representational State Transfer (REST) gets it's name and in what state (or payload/data) it is in during transit from client data-layer to server and then onward to the back-end systems and infrastructure.

It is therefore an architectural style for communicating between client-server. It is a state-less model as the payloads are merely a representation of state at calltime.

There is no choice between using SOAP or REST as it is already pre-defined as an architectural service and you have to use the system that the API creator requires.

Some sites, like Amazon, support both.

A good blog to read [https://smartbear.com/blog/test-and-monitor/understanding-soap-and-rest-basics/] and a little more technical version [https://www.soapui.org/learn/api/soap-vs-rest-api.html]

## React data-layer and API calls

Restful-React - As React defines itself as a front-end library, it allows users to figure out what works best for the app - this provides building blocks and flexiblity it also means that there are no protocols to follow, it does not prescribe how REST API's should be created.

Read More on API's and MVC [https://www.codecademy.com/articles/what-is-rest] [https://www.codecademy.com/articles/mvc]

React therefore can choose the API-call and some stacks prefer the REST-API call as a continuous, high volume flows of data from client to server.
