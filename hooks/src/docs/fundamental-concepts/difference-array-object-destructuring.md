**What is the difference between array and object destructuring?**

Object destructuring allows us to destructure the props object in a component in REact. This allows us to reference the keys from an object instead of having to use props and then dot notation each time.

With array destructuring, we can't access the values by key. Instead, we access them by index or position. So in this array `const destructureArray = [ a,b,c ]` to access the element b, destructureArray[1], woud give us the value of b as an array is zero indexed and a takes the index of zero. To achieve the same thing using array destructuring we can name the elements in a variable which is also an array. `const[0,1,2] = [ a,b,c ]` and we can now access it with the name we have given it so 3 accesses c. We can also use a commas for the elements we want to skip `[0,,]` will skip the second and third elements. It's really important to understand how array destructuring works as it is used in the `useState` method.
