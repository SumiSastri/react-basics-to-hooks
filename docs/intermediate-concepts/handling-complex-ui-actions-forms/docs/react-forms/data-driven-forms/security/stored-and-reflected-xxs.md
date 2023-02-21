When the content is rendered on the server, we need to pay attention to two more types of XSS. 

Stored XSS attacks occur when the application reads untrusted data from a persistent datastore and uses this data to render HTML without validation or sanitization. This HTML is then sent to the browser, and if the attacker managed to deliver malicious payload to the datastore that was used to render the content, we have a possible cross‑site scripting bug. 

Bear in mind that it is the data that is not trusted, not the data storage. The application may be using a private and well‑protected database, but if the attacker can submit their own content through other legitimate application features, the attack may still be successful. 

Reflected XSS attacks happen when the application reads data from the incoming HTTP request without proper validation and uses this data to render the response without adequate sanitization. 

This type of attack is usually quite a bit simpler for attackers to carry out, as HTTP request parameters are easy to tamper with and some of them are well‑known XSS sources. Cross‑site scripting vulnerabilities are dangerous regardless of their type. XSS attacks allow attackers to execute arbitrary code in victim's browser and may lead to the same severe consequences. We should put the same effort into protecting our React applications against stored, reflected, and DOM XSS vulnerabilities. 

