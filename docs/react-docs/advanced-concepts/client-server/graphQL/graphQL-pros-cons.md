- Aggregated queries in one query
- Exact requirements met - language agnostic
- Strongly-typed - predictability of query - error-handling with the schema validation with resolver functions
- Eco-system and tooling - server libraries batch resolving
  -- IDE's - GraphQL Visual Editor
  -- GraphQL Client libraries like (Apollo-Client- most widely adopted) (Relay-Client - specifically for react for data-fetching) writing queries to the backend to get the data. Incerceptors for caching query results as it does not come out of the box with GraphQL
  -- GraphQL Server libraries send responses back (Apollo-Serverside) (ExpressGraphQL) (GraphQL Yoga) Network-Layer - GraphQL Execution Engine - query from client to backend parsed or read - schema validated - query received is traversed field by field with resolver function for each field the execution alogrithm sending data back in the right order and shape as requested as json )
  -- Database to GraphQL server - Prisma (supports RDBMS and noSQL dbs) replaces ORMs - subscriptions
  -- GraphQL Voyager - schema representation with entity mapping
  -- GraphQL Faker - mock data

- Integration with React [https://app.pluralsight.com/guides/how-to-set-up-graphql-in-a-react-app]
- Developer community (Twitter/ Facebook/ )

CONS

- One of the cons is developers can do anything against schema - aliases of the same query to return different bits of information
- Caching not embedded as in HTTP
- Error handling and schema validation require client-server libraries as add-ons
