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

Add any default styles here. Header can be changed to 20vh if you want maintain the react styling and move the header to the top of the page

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
