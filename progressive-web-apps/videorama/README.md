## What are PWAs

- PWA's reduce data use, make apps fast and reliable, less storage space required
- Better on web and mobile, makes web apps seem native, good for downloading native apps on any device, device agnostic - users & customers to download the app on any device without app stores
- works on lower-speed networks and is an application that's like a mobile website.
- improves loading times across all environments and varying networks
- PWA's work on the principle of continous build and integration of the build files in the production environment not just the dev environment.

## PWA check-list

Google [https://developers.google.com/] & [https://developers.google.com/web/ilt/pwa/introduction-to-progressive-web-app-architectures]

Web dev[https://web.dev/pwa-checklist/]

Medium [https://medium.com/@samichkhachkhi/pwa-checklist-for-the-googl-341cb0426e]

Lighthouse[https://developers.google.com/web/tools/lighthouse]

## Scaffolding

- `npx create react app` videorama
- `run npm i`
- `npm run start`

Lightweight server - in directory videorama
`sudo npm install -g, serve` the password prompt is your local laptop access

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

- serviceWorker.js - we will need to register this later, it is opt-in but do not remove it as with other projects
- go to index.js and register it
  `serviceWorker.register();`

* public folder add new logo-icon sizes
  120x120-ios
  144x144 -android
  152x152 -ios
  167x167 -ios
  180x180 -
  192x192 -
  512x512 -chrome

  In the icons array in the manifest-json file update the icon sizes

  ```
  {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
  ```

* setUpTests.js
* app.test.js

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
        </div>
      ))}
```

Now proceed to add the videos and any other data you want to render from the array and style accordingly. Videos have their own JSX tag `<video className="videos" controls src={video.video_url} />`

### Building in production and serving to local host

`npm instal -g serve`
`npm run build`

- optimizes the build for the best performance
- code minified, and chunked
- once buiild it can be served with a static server
- run `serve -s build`
- production build folder is now in the videorama folder
- in the build folder are the static minified files - html, css, js etc.,
- there is a manifest.json file as well
- go to the localHost:5000

### LightHouse audits and reports

- run in guest/ incognito mode for better results on the build file render not the dev mode renders as in the build which is already minified and has better performance. On accessiblity there are key things to look for like alt tags populated, available offline etc., to improve Lighthouse metrics.

### What is a service worker?

- A service worker is a JavaScript that runs in the background and is responsible for caching resources, handling network requests and storing content for offline use. The create-react-app providers `serviceWorker.js` to us
- go to localhost:3000 start the app and go to the dev tools, right click to get the Applications tab and see the list of registered and active service workers on this app, you can choose to unregister them
- Registering the service worker - React's service worker is opt-in in the src file and it needs to be registered in the index.js file. Documentation of React's PWA is here and is worth a read[https://bit.ly/CRA-PWA]
- Run another `npm run build` and `serve -s build` and go to localhost:5000
  if you change anything in the app it will not refresh as the service worker caches it. You need to open it in a new window or hard refresh `command+shift+r`

### Gettting the app to work in offline mode - removing the API call

- In developer tools go to network tools - note the code chunks in webbpack

<img src="/progressive-web-apps/videorama/src/assets/network-tab-check.png" alt="PWA project" height="250"/>

- check the work offline check box and refresh
- if you have checked the cache box then nothing will load, but with the service worker actively caching data you will see some content
- uncheck all boxes and download a video and put it into the src folder of the app
- make an offline component to render conditionally as part of the error message block

### Manifest JSON - icons of different sizes for different browsers and platforms

List of icon sizes
120x120-ios
144x144 -android
152x152 -ios
167x167 -ios
180x180 -
192x192 -
512x512 -chrome

Work from chrome backwards as to make a png smaller there is no loss of resolution.

Update the manifest-json array with the new sizes - if you use the word logo you can overwrite the react logos.

```
{
      "src": "videorama120.png",
      "type": "image/png",
      "sizes": "120x120"
    },
```

- run a build & serve
- open up a new window
- open up the Application tab
- check the icons loading
- run Lighthouse audit

Change the app name in manifest json - short name char limit 12/ name char limit 45/

```
"short_name": "Videorama",
"name": "PWA with React Hooks",
```

- run a build & serve, check the application name in manifest json

<img src="/progressive-web-apps/videorama/src/assets/manifest-json-check.png" alt="PWA project" height="250"/>

## Installing the app on Chrome for testing

- run build and serve
- Go to chrome in ordinary dev mode not incognito/guest
- in build mode you will see the pwa to be installed
- click install
- open new tab
- you will see the app installed
- click and the app should open in its own window

## Installing the app on IoS for testing

- in your index.html file create link for 152x152 for apple-touch
  `<link rel="apple-touch-icon" sizes="152x152" href="videorama152.png" />`
- put the link under the favicon link
- run a build and serve
- use a Apple phone or toablet with the ip address 192.168.187:49572
- the app will appear in the Safari browser
- go to the share icon
- select Add to Home Screen
- the icon and app name appear
- Click add
- the app is now installed on IoS - you will see the icon on your device screen
- click on the icon and it will open the app up

## Deploy on Netifly

http://localhost:49929