Storing URLs in a template literal in a dot env file that is not pushed to a repo is the best way to protect URL-jacking.
1. Create a dot env file in the root of your app `touch .env`
2. Assign the URL to a variable - in a react app the prefix is required - and save it in the dot env file created
3. You can now use the url on any page of your app
4. Be sure to add the dot env files to your dot gitignore files

eg:
REACT_APP_URL_NAME = http://localhost:5000/URL-EXTENTION

Read more on [https://stackoverflow.com/questions/54720311/react-is-not-fetching-env-variables]
