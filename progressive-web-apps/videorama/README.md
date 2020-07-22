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

API end point [orangevalleycaa.org/api/videos]

- Hooks useState (state management) and useEffect (data-fetching)

- useState sets the initial data as an empty array
- useEffect is a call back function that runs after the render method.
- add dependency (in this case) an empty array to prevent the default re-render of the componentDidMount method in the React component lifecyle

```
 const [videoData, setVideoData] = useState([]);

  useEffect(() => {}, []);
```

**Fetching data**

- set up the async-await in the native fetchAPI call to wait for the data to load.

```
const fetchVideoData = async(() => {
      await;
    });
```

- with the result of the data we can run the async function to set the data to what values we want in the render method.

-turning it into a JSON makes loading time faster as JSON is a light on storage.

**Rendering data**

- the data that is rendered (the videos) is in JSX so we map the data into the JSX element to render it in providing a key for the key-value pairs.

So, we'll say, video, give it a height of 200. We'll give it this attribute of controls, meaning that it'll just have the playhead controls. And then we'll say source, video.video_url. And then we'll close this tag. All right. So let's see how we're doing. We're going to open up the browser. Awesome. We should see that we're being able to render these videos. Those are loading as expected. video.id.
