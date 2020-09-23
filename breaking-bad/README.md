# Table of Contents

<img src="/breaking-bad/src/assets/breaking-bad-app-screenshot.png" alt="Breaking-Bad PWA with Hooks" height="350"/>

Deployed with Netifly on [https://happy-brown-985f49.netlify.app]

1. [Scaffolding](#File-access-and-scaffolding)
2. [Project-build](#Project-build)
3. [API call with Hooks](#API-call-with-Hooks)
4. [Child components](#Child-components)
5. [Nested components](#Nested-components)
6. [Loading library](#Loading-library)
7. [PWA set up](#PWA-set-up)

#### File access and scaffolding

To access file - cd into repo and clone

- `npm install -y`

Dependencies:

- npx create-react-app 'breaking-bad'
- npm install axios
- npm install react-icons --save
- npm install --save react-spinners + npm install @emotion/core

A note on React Libraries
Icons - react-icons [https://github.com/react-icons/react-icons]
Loading - works with emotion CSS documentation react-spinners [https://www.npmjs.com/package/react-spinners][https://github.com/davidhu2000/react-spinners]

#### Project build

**Clean up create-react-app**

- Remove files
- setUpTests.js
- logo.svg
- index.css
- app.test.js
- index.css
- In App.js remove everything in the header section and keep wrapping div
- In public folder
- go to index.html and write your app title
- create favicon - go to the favicon: create your own icons here [https://icoconvert.com/] - upload png and convert to .ico - call the file favicon.ico in a create-react-app it will appear automatically as there is already a link in the index.html `<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />`
- create browser icons - open .png files, go to tools, adjust size, save each of these versions in public folder - start with largest size and reduce
  120x120-ios
  144x144 -android
  152x152 -ios
  167x167 -ios
  180x180 -
  192x192 -
  512x512 -chrome
- go to manifest json and add these files to the array of objects with images
- Change the app name in manifest json - short name char limit 12/ name char limit 45/
- Under the favicon link in index.html add this `<link rel="apple-touch-icon" sizes="152x152" href="logo152.png" />` for the different browsers to display the icons correctly

**Planning:**
Think through folder structure

- common (navbars, buttons and other re-usable components)
- app-pages (keypages to be routed later)
  -- main-card (holds all the app information that will be exported to app.js)
  -- card-list/ card (parent-child for show-one/ show all)
- api-calls (external data calls)

### API call with Hooks

- [Back to Table of Contents](#Table-of-Contents)]

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

### Child components

- [Back to Table of Contents](#Table-of-Contents)]

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

### Nested components

- [Back to Table of Contents](#Table-of-Contents)]

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

### Loading library

- [Back to Table of Contents](#Table-of-Contents)]

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

### PWA set up

- [Back to Table of Contents](#Table-of-Contents)]

1. Set up server with an npm package

- cd into directory in terminal `sudo npm install -g, serve` the password prompt is your local laptop access
- in the project folde `npm install -g serve`

2. Build for production and serve on the server

- build for production and deploy `npm run build`
- once app built it can be served with a static server
- run `serve -s build`

3. Add to chrome
   <img src="/breaking-bad/src/assets/pwa-on-chrome.png" alt="Breaking-Bad PWA on Chrome" height="350"/>
   Only when you have a production build can you go to the developer tools and see if the app can be installed in chrome, select the install option and install.
   You need to select the localhost as described by the `serve -s build` output in the console
   If you go to a new tab and click on apps, you will see the PWA in the apps list on your local host.

4. Add to Safari
   You need to select the ip address as described by the `serve -s build` output in the console

- Go to an apple phone or tablet - not mac desktop
- Use the network provided in the serve - `http://192.168.1.87:53105 ` - which is the DNS for the site
- Go to share icon
- Select add to homescreen
- The icon will now connect to the local version for testing

5. Steps for creating an offline version to improve Lighthouse metrics

- Go to developer tools - hit refresh
- Look at network tab to see resources loaded - the fetch data files should appear as chunks served by Webpack
- Check the offline box - service worker cached data appears but not the fetch data as not connected to network
- You can download this data and put it into an array of objects as mock-data to be used for an offline component - take out the fetch call and simply load the data from the mock data file that is hard-coded.

Note: This is not a great option for large apps but for small side-projects it is an option

6. Deploy on Netifly

- Run final build - make sure you have cleaned up code, taken out any comments, spaces, refactors etc.
  `npm run build `
- Once built run the production ready app on server `serve -s build`
- Run a Lighthouse test
- choose an incognito browsing page
- go to [https://developers.google.com/speed/pagespeed/insights/] and add your DNS address [http://192.168.1.87:53105] and run analyze (note that your app must be running the final build version on your local server)
- push final changes to github
- create Netifly account - drag and drop build folder into the dashboard section - the app is auto deployed
