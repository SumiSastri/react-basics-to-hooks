# Guiding principles of REST

REST API calls simplifies the process of requesting data and getting a response from the server. This is because only a representational state of the data is transfered via a JSON object in the request and responses are returned in a representational state back from the server to the client as a JSON object.

The data then is set to the state that the front-end application requires it in each component in the front-end state-management system. This could be in the component state (as with Hooks) or with state-management tools like Redux.

REST-API calls reduces the bandwidth required for the transfer of data and is highly suitable for web/mobile applications. It also has better documentation and error logs and has replaced SOAP.

Set out by Dr. Fielding in the year 2000. REST is based on six principles that define the design principles of REST

### Stateless

the representational state contains all information required from the client in the request so that the server understands the request and responds with the right data. Requests from the client are 2. the URL (unique resource locator) 3. the query string parameters 4. the request header, the request body which holds the state or 5. the information sent by the request from the resource 6. the server then returns all the information that the client requests in the response via headers and the response body and a status log system 200 (OK)/ 300(redirects)/ 400(errors) helps in debugging

### Client-Server: The separation of concerns

The client sends the request
The servers sends the response

There is a uniform interface separating the client from the server which improves scalability and portability of the system over multiple platforms.

### Uniform Interface

There are four constraints to uniform interface that REST has identified and dealt with to ensure uniformity of the interface

1. Resource identification
2. Resource manipulation using representations
3. Self descriptive messages
4. Hyper media as the engine of the application state - ie requests and responses sent through hyper-text-transfer-protocols

### Cacheable

Browsers must get the response so that they are cacheable and can be used again by the client. Server responses are labelled either implicitly or explicitly as cacheable. This allows the client cacher in the browser to reuse the data in the cache at a later stage without depending on the reuse of state data.

### Layered System

Stability via limiting components behaviour. Benefits of the layered system are

### Load balancing

Shared caches for scalability
Security - components can not interact with layers above it, only the immediate layer above it
Code on Demand
Client code can be downloaded extended via the interface used by the application
