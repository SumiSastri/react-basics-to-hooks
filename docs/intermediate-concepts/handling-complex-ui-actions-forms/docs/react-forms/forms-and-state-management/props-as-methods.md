With a handle delete function you put it in the component where the data is intialised - where state is defined and update state in that component with a handleDelete method.

This method is then passed as a prop to a nested component and then the method is available to the child component via this prop.

```
const [blogs, setBlogs] = useState =[];

  const handleDelete = (id) => {
    const blogsToDelete = blogs.filter(blog => blog.id !== id);
    setBlogs(blogsToDelete);
  }
```

The handle delete uses a filter method that checks each element of the array and does a boolean logic search - does it match the id or not - if it matches the id it returns a new array with the matched ids and filters out any id that is not the id passed. The new array - `blogsToDelete` can now be used as an arguement of the `setState` method - in this case `setBlogs` hook.
