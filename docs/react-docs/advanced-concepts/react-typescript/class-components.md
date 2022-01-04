Each class component is a function which needs the params of the function (props, state) to be declared as a generic type with the key word `interface`, the type then needs to be annotated next to the function call.

Any further functions will need annotations either from the react-types or any libraries / dependencies used in the repo.

The example of a counter has been used and the `Counter.jsx` file changed to `Counter.tsx` file. Note that the App.tsx file now immediately replaces the `.jsx` file that it imports with the `.tsx` file and throws type errors that can be fixed.

The `ReactNode` is the React Library's node for the Virtual DOM - it is used for the children prop which is a default prop.

The `ErrorBoundary.tsx` file shows how life-cycle methods in a class component can be notated.
