Documentation [https://reactstrap.github.io/]

This library allows you to use Bootstrap with react.

If you follow the documentation you will see the options available in this library - while they are extensive they are also limiting.

I found reactstrap useful for quickly spinning up a front-end design with Bootstrap-like options. The documentation is easy to understand if you are familiar with Bootstrap. Even if you are not, I found the documentation fairly easy to follow.

I tried as many options that I could in this repo simply to familiarise myself with the library. One of the things I found was the props that are built-in to the library made it difficult for me to create reusable components. 

The basic principles are each of the design items (eg. forms) comes with it's set of props and/or nested components. Once you nest components, this is where rigidity sets in as a functional component that you create will simply render the same option with limited options to customise.

The way to customise these is to nest them in a ```div``` jsx tag and then customise the ```className```. You can also overide styles with in-line styling.