## What are PWAs

- PWA's reduce data use, make apps fast and reliable, less storage space required
- Better on web and mobile, makes web apps seem native, good for downloading native apps on any device, device agnostic - users & customers to download the app on any device without app stores
- works on lower-speed networks and is an application that's like a mobile website.
- improves loading times across all environments and varying networks

## PWA check-list

Google [https://developers.google.com/] & [https://developers.google.com/web/ilt/pwa/introduction-to-progressive-web-app-architectures]

Web dev[https://web.dev/pwa-checklist/]

Medium [https://medium.com/@samichkhachkhi/pwa-checklist-for-the-googl-341cb0426e]

Lighthouse[https://developers.google.com/web/tools/lighthouse]

## Scaffolding

- `npx create react app` - is a PWA
- `run npm i`
- `npm run start`

Clean up:-

- FILES & CODE TO REMOVE
- app.js

* remove boiler plate text and set up a `h1` JSX tag with hello world, check that the app is still working.
* remove the logo import

- index.css - remove default styling from different browsers

```
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

Add any default styles here. Header can be changed to 20vh if you want maintain the react styling and move the header to the top of the page. Import google fonts, change colors etc.,

You can remove these as well

- setUpTests.js
- logo.svg
- app.test.js
- serviceWorker.js (then remove imports in index.js serviceWorker.js - and commented out text at the bottom)

- In public folder
  - go to the favicon: create your own icons here [https://icoconvert.com/]\
  - go to index.html and write your app title

## API call with Hooks

API end point [https://orangevalleycaa.org/api/videos]

- Hooks useState (state management) and useEffect (data-fetching)
  `import React, { useState, useEffect } from "react";`

- import the hooks
- useState is the function declaration, setting the initial data as an empty array. The destructured array holds the `ovVideoData` and the `setVideoData` methods as elements in the array's variable.
- useEffect is a call back function that runs after the render method.
- add dependency (in this case) an empty array to prevent the default re-render of the componentDidMount method in the React component lifecyle

```
const [ovVideoData, setVideoData] = useState([]);;

  useEffect(() => {}, []);
```

**Fetching data**

- set up the async-await call to wait for the data to load.

```
const fetchVideoData = async(() => {
      await;
    });
```

- call the API endPoint, using the variable in the state object and the native fetchAPI (use can use axios or any other HTTP runner here)

- with the result of the data we can run the async function. We call the state objects `setVideoData` method passing the value of the API response call in the function call.
- we use a `.then(()=>{})` block turning the data we get into a JSON. This makes loading time faster as JSON is a light on storage.
- Check the response in the developer console to ensure data is flowing.

<img src="/progressive-web-apps/videorama/src/assets/api-call-data-check.png" alt="PWA project" height="250"/>

- Then call the `fetchVideoData()` function before the dependency of the reduce method.

```
const fetchVideoData = async () => {
      const ovVideoData = await fetch(
        "https://orangevalleycaa.org/api/videos"
      ).then((response) => response.json());
      setVideoData(ovVideoData);
        console.log(ovVideoData);
    };
    fetchVideoData();
  }, []);

```

**Rendering data**

- the data that is rendered (the videos) is in JSX so we map the data into the JSX element, passing in a key to identify each key-value pair

```
{ovVideoData.map((video) => (
        <div key={}></div>
      ))}
```

Style the elements and pass the data variables. Check the render and styles work on the front end with a text tag first.

<img src="/progressive-web-apps/videorama/src/assets/api-call-render-check.png" alt="PWA project" height="250"/>

```
{ovVideoData.map((video) => (
        <div className="video-container" key={video.video_url}>
          <h2> {video.name}</h2>
          <video className="videos"></video>
        </div>
      ))}
```

Now proceed to add the videos and any other data you want to render from the array and style accordingly.
