
DOM XSS is a special category of cross‑site scripting attacks that runs entirely in the browser. This is why it is especially dangerous in React applications.

A successful DOM XSS attack requires a source and a sink. The movement of an attack from a source to a sink is the taint-flow.

More reading[https://portswigger.net/web-security/dom-based]

The source is how the attacker submits the malicious payload to the application. The browser APIs provide multiple sources, but for the attack to be successful, the application has to read data from the source and process it. 

Processing may involve data validation and sanitization. The goal of data validation is to ensure that data read from the source is in the expected format and is not malicious. The goal of data sanitization is to translate into a format that is safe to process further by other components of the application. 

Failure to implement proper validation and sanitization may result in data being passed directly to execution sinks. If raw data is passed to a sink, the browser may add new nodes with malicious code to the DOM. If that happens, the browser parses and executes that code. 