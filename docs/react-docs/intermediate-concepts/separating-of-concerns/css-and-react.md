20. How do you add styling to your React Components?

- Libraries
  Icons - react-icons
  [https://react-icons.github.io/react-icons/]

```
import React, { Component } from "react";
import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";

export class NavBar extends Component {
  render() {
    return (
      <IconContext.Provider value={{ color: "red", size: "3rem" }}>
        <h1>
          <!-- The Component props are color and size with provider you can wrap the Compoent and remove individual props

          <FaReact color="red" size="3rem" /> React Fundamentals
          <FaReact color="red" size="3rem" /> React Hooks -->

        </h1>
      </IconContext.Provider>
    );
  }
}

export default NavBar;
```
