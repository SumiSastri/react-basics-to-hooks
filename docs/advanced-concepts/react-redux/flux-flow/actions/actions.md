The purpose of this documentation is to outline the difference between action creators/ action payloads and action Types - detailed information in separate files in this folder.

__Documentation__

__Resources & Further Reading__

__What__  

Actions JSON-objects with payloads that represent the intention to change state of the underlying component-container state. They are explicit definitions of these changes to strictly type the possible mutations of state in the application's lifecycle states. These states are initial (pristine) - touched if changed by a component mounting, updating, unmounting in React. 

They are comprised of the action type and action creators and the 3 are often confused and incorrectly used interchangeability.

```
action {
	"type":"SOME_STRING_CONSTANT_ACTION_TYPE",
	"payload": "some data"
}
```

__Why__ 

Used as part of the redux and flux flow pattern. They explicitly define all the possible actions in an application state. They must be defined for the actions to be executed. This provides some control in the flux-flow.

__Where__ 

In any library using flux flow

__When__

For utility functions so that they can be exported to components that need these actions to function 

__How__ 


**Gotchas**  

Actions are not action-types or action-creators although the 3 are often confused and incorrectly used interchangeability.

More in ```action-types-string-constants.md``` & ```action-creators.md```

__What are ActionsTypes?__

These are string constants that hold the information of the action payloads (actions). More information in ```actionType.md```

__What are Actions Creators?__

Action creators are utility functions that return the payload change from one component-container state to another. More information in ```action-creators.md```


