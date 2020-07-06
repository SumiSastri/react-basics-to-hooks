Install

- npx create-react-app 'breaking-bad'
- npm install axios
- npm install react-icons --save

Libraries
Icons - react-icons [https://github.com/react-icons/react-icons]

Clean up

- Remove files
- serviceWorker.js
- setUpTests.js
- logo.svg
- index.css
- app.test.js
- Remove imports in index.js
- index.css
- serviceWorker.js - and commented out text at the bottom
- In App.js remove everything in the header section and keep wrapping div
- In public folder

  - go to the favicon: create your own icons here [https://icoconvert.com/]\
  - go to index.html and write your app title

  Folder structure

  - common (navbars, buttons and other re-usable components)
  - app-pages (keypages to be routed later)
    -- main-card (holds all the app information that will be exported to app.js)
    -- card-list/ card (parent-child for show-one/ show all)
  - api-calls (external data calls)

Step 1: API-calls use the `useState` and `useEffect` hooks - create component and import into main-card component check rendering of data in console.

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
      console.log(result.data);
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

(front-end view of data in console)[breaking-bad/src/assets/checks-api-data.png]
