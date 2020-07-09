## List rendering with map & filter

Documentation MDN for array map method [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map]

Mapping through an array is method performed on the Array Prototype (or the class Array)
that takes as a param a call-back function.

```
let arrayOfNumbers = ["1", "2","3" ]

<!-- ES6 - method with call back function body logic MDN syntax -->
arrayOfNumbers.map(number => number * 2)

<!-- or -->

arrayOfNumbers.map((number)=>{number*2})
<!-- output returned [newarray with function body logic] -->

Syntax
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])

```

In React the call back function body returns JSX elements - they could be `p` tags, `li` tags, `div` tags depending on what you want to do with the method's output.

Here the array we want to map through returns each number in the element in a `li` tag. We then pass the variable in the JSX to render it. The cleaner way to write the code is to write the map logic above the return statement and assign it to a variable and pass the variable in.

```
import React from "react";

function MapNumbers() {
  const numbers = [1, 2, 3, 4];
  const listNumbers = numbers.map((eachNumber, index) => <li key={index}>{eachNumber}</li>);
  return (
    <div>
      <li>{listNumbers}</li>
    </div>
  );
}

export default MapNumbers;
```

Another way to write this code is within the JSX - here we are mapping through the array and returning in a `p` tag each name in the array.

```
import React from "react";

function MapNames() {
  const names = ["Ram", "Sita", "Lakshman", "Hanuman"];

  return (
    <div>
      {names.map((eachName, index) => (
        <p key={index}>{eachName}</p>
      ))}
    </div>
  );
}

export default MapNames;

```

Using the index param in the map function can only be used when all these 3 conditions have been fulfilled

1. There is no other unique identifier that can be used as the key
2. What you are rendering is not going to be sorted or filtered or changed
3. The list will never change and is static

When mapping an object in hard-coded data this becomes obvious. Using index as a key should be used as a last resort. You need to use a key prop with an id/ a unique identifier where possible.

In the mock list data that we have hard-coded in the MockData component, the mockListData is an array with nested objects `mockListData = [{}, {}, {}]` that we have assigned to a variable to call in the map method.

The map method we write is exported to a functional component MapObjects that will only run the logic of the map method which is to render the items in the list we require in the JSX element specified by the function body.

We do not write the second param of map as index as we are not going to use index as a key.

Instead we are going to use key as a prop of the functional MapObjects Component in which our map method is rendered. We will pass in the id from the mockListData array of objects, using dot notation. We will also pass our data that has been mapped as a second prop to the MapObjects Component.

We keep the return of the new array from the function body in the MockData component.

```
 const mockList = mockListData.map((data) => (

    <!-- JSX is moved to a functional component called Map Objects

    <h5>
     Employee Name:{data.name} Contact details (P): {data.phone} (E):
      {data.email}
     </h5>
     -->

    <MapObjects data={data} key={data.id} />
  ));
  return <div>{mockList}</div>;
```

This is what our functional component, MapObjects looks like. It takes props passed as a destructed method as a param and access the individual items in the object with dot notation rendering only those key-value pairs we want to render in the JSX using the id as the identifier to explictly order the rendering of the object keys with their associated values.

There is no need to add the key to the `h5` tag in this component.

```
import React from "react";

function MapObjects({ data }) {
  return (
    <div>
      <h4>Mapping object data</h4>
      <h5>
        Employee Name:{data.name} Contact details (P): {data.phone} (E):
        {data.email}
      </h5>
    </div>
  );
}

export default MapObjects;
```

The documentation provides good examples of how to use the key prop [https://reactjs.org/docs/lists-and-keys.html] scroll down to the extracting components with keys section

You can also embed the map method into a jsx element in the render method.
