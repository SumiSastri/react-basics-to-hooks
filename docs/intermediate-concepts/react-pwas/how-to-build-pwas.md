# Table of Contents

1. [Scaffolding](#Scaffolding)
2. [API call with Hooks](#API-call-with-Hooks)
3. [LightHouse audits and reports](#LightHouse-audits-and-reports)
4. [What is a service worker](#What-is-a-service-worker)
5. [Working in offline mode](#Working-in-offline-mode)
6. [Updating icons in manifest file](#Updating-icons-in-manifest-file)
7. [Installing on Chrome for testing](#Installing-on-Chrome-for-testing)
8. [Installing on Ios for testing](#Installing-on-Ios-for-testing)
9. [Deploy with Netifly](#Deploy-with-Netifly)

## Scaffolding

- `npx create react app` name of your app
- `npm i`
- `npm run start`

Lightweight server - in directory videorama
`sudo npm install -g, serve` the password prompt is your local laptop access

Clean up:-

- index.css - remove default styling from different browsers

```
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

- serviceWorker.js - we will need to register this later
- go to index.js and register it
  `serviceWorker.register();`
- go to index.html and write your app title
- In public folder
- go to the favicon: create your own icons here [https://icoconvert.com/] don't change the name of the file it is easier to use favicon.ico. In the icons array in the manifest-json file update the icon sizes if these sizes are not specified

  ```
  {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
  ```

  you will not need to change this file if the sizes are in a create-react-app. In the index.html as well `<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />` you will not need to change this link reference.

* public folder add new logo-icon sizes

- open .png files, go to tools, adjust size, save each of these versions in public folder - start with the biggest and go down to ensure you get the best resolution call them logo120, logo144 - again makes it easier for links in manifest-json and index.html files
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
      "src": "logo120.png",
      "type": "image/png",
      "sizes": "120x120"
    },
  ```

- go to manifest json and add these files to the array of objects with images
- Change the app name in manifest json - short name char limit 12/ name char limit 45/
- in index.html - Under the favicon link add this `<link rel="apple-touch-icon" sizes="152x152" href="logo152.png" />` for the different browsers to display the icons correctly

## API call with Hooks

- [Back to Table of Contents](#Table-of-Contents)]

API end point (videorama) [https://orangevalleycaa.org/api/videos]

- call the API endPoint, using the variable in the state object and the native fetchAPI (use can use axios or any other HTTP runner here)

- Check the response in the developer console to ensure data is flowing.
- Style the elements and pass the data variables. Check the render and styles work on the front end with a text tag first.

Now proceed to add data you want to renderand style accordingly.

### Building in production and serving to local host

- [Back to Table of Contents](#Table-of-Contents)]

  `npm install -g serve`
  `npm run build`

- optimizes the build for the best performance
- code minified, and chunked
- once app built it can be served with a static server
- run `serve -s build`
- production build folder is now in the videorama folder
- in the build folder are the static minified files - html, css, js etc.,
- there is a manifest.json file as well
- go to the localHost:5000

### LightHouse audits and reports

- [Back to Table of Contents](#Table-of-Contents)]

- run in guest/ incognito mode for better results on the build file render not the dev mode renders as in the build which is already minified and has better performance. On accessiblity there are key things to look for like alt tags populated, available offline etc., to improve Lighthouse metrics.

### What is a service worker?

- [Back to Table of Contents](#Table-of-Contents)]

- A service worker is a JavaScript that runs in the background and is responsible for caching resources, handling network requests and storing content for offline use. The create-react-app providers `serviceWorker.js` to us
- go to localhost:3000 start the app and go to the dev tools, right click to get the Applications tab and see the list of registered and active service workers on this app, you can choose to unregister them
- Registering the service worker - React's service worker is opt-in in the src file and it needs to be registered in the index.js file. Documentation of React's PWA is here and is worth a read[https://bit.ly/CRA-PWA]
- Run another `npm run build` and `serve -s build` and go to localhost:5000
  if you change anything in the app it will not refresh as the service worker caches it. You need to open it in a new window or hard refresh `command+shift+r`

### Working in offline mode

- [Back to Table of Contents](#Table-of-Contents)]

- In developer tools go to network tools - note the code chunks in webpack
- check the work offline check box and refresh
- if you have checked the cache box then nothing will load, but with the service worker actively caching data you will see some content
- uncheck all boxes and download a video and put it into the src folder of the app
- make an offline component to render conditionally as part of the error message block

### Updating icons in manifest file

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

## Installing on Chrome for testing

- [Back to Table of Contents](#Table-of-Contents)]

- run build and serve
- Go to chrome in ordinary dev mode not incognito/guest
- side bar of dev tools three dots click you will see the prompt to install the app as pwa
- only in build and serve mode you will see the pwa to be installed
- click install
- open new tab
- you will see the app installed
- click and the app should open in its own window

## Installing on Ios for testing

- [Back to Table of Contents](#Table-of-Contents)]

- in your index.html file create link for 152x152 for apple-touch
  `<link rel="apple-touch-icon" sizes="152x152" href="videorama152.png" />`
- put the link under the favicon link
- run a build and serve
- use a Apple phone or tablet with your ip address 192.168.187:49572
- the app will appear in the Safari browser
- go to the share icon
- select Add to Home Screen
- the icon and app name appear
- Click add
- the app is now installed on IoS - you will see the icon on your device screen
- click on the icon and it will open the app up

## Deploy with Netifly

- [Back to Table of Contents](#Table-of-Contents)]

A traditional website is actually a program that has to run on a web server at all times. Running sites this way needlessly slows things down, provides way too many opportunities for attack, and is expensive to scale.

Unlike the large legacy apps, Jamstack projects neatly separate the frontend pages and UI from the backend apps and databases. Freed from backend servers, the frontend (static directories) can then be deployed globally, directly to a CDN.

JAM stacks offer
Faster websites - A Jamstack deployment doesn’t run on a traditional setup of origin servers. Instead, automated deployments are used to push sites directly to the Edge / CDN with pre-rendering of static files. Rather than building content at runtime for each request, content is prebuilt and optimized during a build setup using a site generator and other build tools.

More secure infrastructure - fewer points of attack

Improved developer experience - Launch faster with more productive dev & deployment cycles. Decoupling the front end from the backend allows for more modular development where we can take advantage of the huge ecosystem of third party tools to provide website functionality.

How to deploy - create an account/ drag your build file from your desktop into Netifly - it deploys in less than 2 minutes - take the url and make a bitly url to share.
[https://elated-khorana-68d5d8.netlify.app]

- [Back to Table of Contents](#Table-of-Contents)]
