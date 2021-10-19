From Testing React Components - Plural Sight (Liam McLennan)
Documentation: https://testing-library.com/docs/

- Components are functions
- With Hooks they are functional components
- With class components they are constructor functions
- When these functions are invoked, React returns a JSON object - check the console to see the object shape when you are testing
- The React component calls function after function in the nested components until there are no more components to call on a page - or in what is known as a recursive call: Fun-fun functions (https://www.youtube.com/watch?v=k7-N8R0-KY4)
- This is often not the best way to test as you have to traverse the virtual-DOM object (see below) and these nested structures are difficult to test (tests are brittle as they have so many steps to cover)

Example:

```
{

    "type": "p",
    "key": null,
    "ref": null,
    "props": {
        "type": "span",
        "key": null,
        "ref": null,
        "props": {
            "children": "This span holds bold text"
        },
    }

}
}
```

- In direct component tests you have to render the component in the test and then check the functionality works as intended
- You can render a whole page with the `render()` method available in the library - you also need to run a `beforeEach()` to render the component and `afterEach()` to unmount the component
