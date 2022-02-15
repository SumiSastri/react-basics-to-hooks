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
