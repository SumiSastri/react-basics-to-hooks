REST APIs, or representational state transfer APIs, transfers a representation of the state in the data-layer of the app in the form of a request header to the API-end point. The request is then matched and a response is sent back through the HTTP (Hyper-Text-Transfer-Protocol) request-response cycle.

Each data-set required by the data-layer in the front-end of the app needs a matching API.

For example: If we are creating a music catalog, we need an API for the musicians, the record labels, the genres of music and we need to create the CRUD routes for each of these operations. The request send out sends back a response in `json`, all the data is sent back. There is a data-transformation process in the front-end of the app in the data-layer - filtering/ modifying the data returned so that it is suitable for the front-end page/ component to be rendered.

With graphQL, this filtering out of unwanted data happens in the query method and the response is returned `.json` therefore only one query is needed as you can ask for one genre and all the musicians in that genre with one request. graphQl aggregates the data you require for the application. There is no under or over fetching of data - this improves the efficiency of the call.

Because REST retreives a significant amount of data, inbuilt in the HTTP request is caching. This is not a feature of GraphQL. Some libraries like Apollo and Relay come with caching options.

In terms of testing and deployment, graphQL queries are easier and quicker to test than REST where every route has to be tested and data validated.

GraphQL is also easy to integrate into legacy systems that use REST. A hybrid system can operate until the switch over.
