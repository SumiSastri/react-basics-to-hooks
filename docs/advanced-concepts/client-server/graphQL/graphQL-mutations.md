Mutations are similar to the rest verbs create-update-delete.

GraphQL assumes there will be side-effects ater mutation operations and changes the dataset after mutation
key word `mutation` the operation defined in an object.

A resolver function is a function that resolves a value for a type or field in our GraphQL schema. Resolvers can return objects or scalars like strings, numbers, Booleans, et cetera. They can also resolve values from another REST API, database, cache, or any other source. So, the GraphQL Server is where we'd write these resolver functions that mutate the data.
