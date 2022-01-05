The purpose of this documentation is to outline the key ways that you can render a list from an array in JSX tags List rendering with the ```Array.map()``` method in a React application.


**Documentation**
 
 MDN for array map method [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map]

Mapping through an array is method performed on the Array Prototype (or the class Array). It is a call-back function

Syntax
```
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])

```
An example to demonstrate the syntax in action

```
let arrayOfNumbers = ["1", "2","3" ]

arrayOfNumbers.map(number => number * 2)
<!-- or -->
arrayOfNumbers.map((number)=>{number*2})

```


In React the call back function body returns JSX elements. 

Method 1: The array we want to map through returns each number in the element and displays it in an unordered list ``` <ul> & <li/>``` tags

```
import React from "react";

const MapNumbers = () => {
  const numbers = [1, 2, 3, 4];
  const listNumbers = numbers.map((eachNumber, index) => <li key={index}>{eachNumber}</li>);
  return (
    <ul>
      <li>{listNumbers}</li>
    </ul>
  );
}

export default MapNumbers;
```

Method 2: The method can be written wirhing the JSX - here we are mapping through the array and returning in a ```<p/>``` tag each name in the array.

```
import React from "react";

const MapNames = () =>  {
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

Mapping in React needs a unique key - the index of the array is used here however where there is a unique identifier - an id, for example, this should be used.  The second param of map as index, should be ommitted if you are not going to use index as a key.


Mthod 3: Mapping an array from an object.

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

4. In a class function you can also embed the map method into a jsx element in the render method.