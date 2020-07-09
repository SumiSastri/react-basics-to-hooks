**Scaffolding:**
Install

- npx create-react-app 'breaking-bad'
- npm install axios
- npm install react-icons --save
- npm install --save react-spinners + npm install @emotion/core

Libraries
Icons - react-icons [https://github.com/react-icons/react-icons]
Loading - works with emotion CSS documentation react-spinners [https://www.npmjs.com/package/react-spinners][https://github.com/davidhu2000/react-spinners]

Clean up:-

- Remove files
- setUpTests.js
- logo.svg
- index.css
- app.test.js
- index.css
- serviceWorker.js (then remove imports in index.js serviceWorker.js - and commented out text at the bottom)
- In App.js remove everything in the header section and keep wrapping div
- In public folder
  - go to the favicon: create your own icons here [https://icoconvert.com/]\
  - go to index.html and write your app title

**Planning:**
Think through folder structure

- common (navbars, buttons and other re-usable components)
- app-pages (keypages to be routed later)
  -- main-card (holds all the app information that will be exported to app.js)
  -- card-list/ card (parent-child for show-one/ show all)
- api-calls (external data calls)

**Step 1:** Set up the API call and check that data-flows into the console
API-calls use the `useState` and `useEffect` hooks - create component and import into main-card component check rendering of data in console.

```
import React, { useState, useEffect } from "react";
import axios from "axios";

const CharactersApi = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters`
      );
      <!-- console.log(result.data); -->
    };
    fetchCharacters();
  }, []);

  return (
    <div>
      <h4>API call for data</h4>
    </div>
  );
};

export default CharactersApi;
```

(front-end view of data in console)[!breaking-bad/src/assets/checks-api-data.png]

**Step 2:** Create child components to render the data from the API

In the parent-component (the API call) import the component that will display all the characters and set 2 props like so:-

```
 <DisplayCharacterGrid isLoading={isLoading} characters={characters} />
```

import the props into the child component and set up the ternery operator

```
import React from "react";

const DisplayCharacterGrid = ({ characters, isLoading }) => {
  return ( isLoading? (<section></section>) : (<section></section>)

  );
};

export default DisplayCharacterGrid;
```

You can now write your map function in the child component, it will be rendered in the parent component where the API is being called.

```
import React from "react";
import CharactersApi from "../../api-calls/CharactersApi";

const DisplayCharacterGrid = ({ characters, isLoading }) => {
  return isLoading ? (
    <section>
      <p>Loading</p>
    </section>
  ) : (
    <section className="cards">
      {characters.map((character) => (
        <li key={character.char_id}>{character.name}</li>
      ))}
    </section>
  );
};

export default DisplayCharacterGrid;
```

(child component maps and renders data from api)[!breaking-bad/src/assets/child-component-maps-renders-data.png]

**Step 3:** Create nested grand-child component passing props down from grandparent-parent-grandchild

In the parent component import the newly created child component so that it can receive props to render. Replace the list tag with the newly created child component tags.

```
<li key={character.char_id}>{character.name}</li>
```

becomes the enclosing tags of the child component and the props become the key and the character prop we pass to the child from the parent.

```
<section className="cards">
      {characters.map((character) => (
        <DisplayCharacter
          key={character.char_id}
          character={character}
        ></DisplayCharacter>
      ))}
    </section>

```

The child component now takes on the props passed down from the parent, passed down from the grandparent that is calling the API. I have added a class called test in the child component to see how we can change the styling only of the component before it is rendered.

**Step 4:** Experiment with the loading library

Replace the loading JSX with a child component and import into the parent, pass the prop isLoading into the child component.

```
<Loading></Loading>
```

Use react-spinner library to style the component and use props provided by the library.

```
import React from "react";
import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";
import { css } from "@emotion/core";

const loaderCSS = css`
  margin-top: 25px;
  padding: 5px;

```

```
  return (
    <div className="search">
      <input
        type="text"
        value={text}
        className="form-control"
        placeholder="Search for your favourite character"
        autoFocus
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  );
};
export default SearchInput;
```
