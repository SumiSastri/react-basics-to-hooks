- uses strongly-typed schema which serves as a contract between client & server

**scalar types or primitive data**

- Integers: a signed 32-bit integer
- Floats: a double-precision floating point value
- Strings: text characters
- Booleans: true or false
- Enums: special scalar types that are restricted to a particular set of allowed values
- ID : used to re-fetch an object or used as a key for a cache

**query and mutation types**
In a graphQL schema which is an object there are 2 additional types

query = request in REST
mutation = change api-data

query - mandatory
mutation - optional

**non-nullable types**

A type can be either set to one type or null, if we do not want a null value, a non-nullable type is set with `!`
