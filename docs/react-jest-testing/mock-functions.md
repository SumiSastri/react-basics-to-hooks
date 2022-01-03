```
const mockFunction = function add2 = (a=1,b=2) => a + b
expect(mockFunction).toBeCalled(1)
let a = 1
let b = 2
expect(mockFunction).toEqual(3)
```
