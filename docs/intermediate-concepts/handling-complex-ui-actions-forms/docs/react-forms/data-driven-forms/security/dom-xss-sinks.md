An XXS is the point of vulnerability that helps the execution of malicious JavaScript injected into the DOM tree.

Additional reading [https://brutelogic.com.br/blog/dom-based-xss-the-3-sinks/]
[https://portswigger.net/web-security/cross-site-scripting/dom-based]

The most common DOM XSS sink is the URL. Attackers can craft a link with malicious payload and trick the victim to click it. The most common access point is `window.location()`

Cookies are another such sink and can be used to store data in the browser. If the attacker can influence the content of the victim's cookies, it might be a vector for getting malicious payload into the vulnerable application. 

Browser storage mechanisms such as local storage or session storage are other forms of DOM-XSS sinks. 

Web messages and the browser history API are two more potential sinks.

In an HTML document the sink is `document.body.innerHTML()` as this can be jacked and replaced with malicious code.

What all of those sources have in common is that they can be manipulated by the attacker. There are several that are used particularly often. 

The query string part of the URL is very easy for attackers to manipulate, and it is used extensively by front‑end applications. 

The fragment is another component of the URL that is commonly used for launching DOM XSS attacks. It has the same properties. It is easy to manipulate and is widely used. 

Referrer is an HTTP header that contains the address of the page that led the user to the current page. This one is also easy for attackers to manipulate, for example, by sending phishing emails or unexpectedly redirecting to the vulnerable page. 

For an attack to be successful, untrusted data needs to be read from the source and passed to the sink without validation or sanitization. 

In this example, we read the fragment component of the URL using the window.location.hash property. The value of this property can easily be manipulated by attackers, and we should treat this data as untrusted. Next, we are passing this untrusted data directly to document.write and document.writeln methods. These methods write a string directly to the document stream as it is being rendered by the browser. The argument passed to both methods is treated as HTML markup. If the markup passed by the attacker contains a script tag with malicious JavaScript code in it, that code will be executed by the browser. This way, document.write can become an execution sink. Direct calls to document.write that attackers can leverage are relatively rare in real‑world applications. It is much more common for developers to use the DOM API to manipulate structure and content of the page. In this example, we will use the document.getElementById method to obtain a reference to a div node with the identifier, container. Similar to document.write, some methods and properties of the DOM API will treat the parameters passed in as HTML markup and will convert this markup to DOM nodes on the fly. If this markup contains malicious JavaScript code, it will be executed, and the attack will succeed. InnerHTML and outerHTML are examples of properties that behave in this way. Many attacks and exploitation attempts can be detected by analyzing server logs. This gives security teams an opportunity to respond to and recover from attacks. Unfortunately, this is almost impossible for DOM XSS attacks. Such attacks are contained within a victim's browser and usually do not leave any traces in server‑side logs. This makes it extremely difficult to protect against such attacks in a reactive manner. The best way is to prevent cross‑site scripting vulnerabilities from being introduced to your code in the first place.