Cross‑site scripting (XSS) is the most prevalent type of vulnerability in front end code. 

These attacks are used for everything from data theft, site defacement, to malware distribution.

These malicious scripts allow attackers to execute arbitrary code in a victim's browser. The first step of the attack is to submit malicious data to the application. 

This may take the form of data of a link that is then delivered to the victim. The malicious data contains code provided by the attacker. The victim's browser processes the payload and runs the code provided by the attacker. The provided payload steals sensitive data from the victim's browser, or performs other activities such as making network connections or performing unwanted actions within the application. 
 
XXS attacks are among the most serious, and their impact on your application can be significant. Malicious code executing within the application is very likely to be able to access any data stored in the browser by that application. Thanks to the same origin policy, one of the most basic security mechanisms of the web, the impact is limited to a single origin and not all data stored in the browser. 


__Impact of XSS attacks__

1. Theft or exfiltration of sensitive data.
2. Send and receive fake/ malicious data via HTTP network requests
3. Installing malware like keyloggers to spy on user activity within the application and gather additional information about the victim.  
4. As malicious actors have same same privileges as the user with keyloggers malicious actors can behave like the app-adminstrators and hijack sessions and take-over accounts in the guise of being the actual service provider
5. XXS allows malicious actors to change anything on a DOM-node - CSS/ layouts/ functionality of event handlers. It is a powerful way to deceive users go on a phishing mission
6. By modifying the DOM (also known as DOM-clobbering) XXS payloads can seek to evade security mechanisms and go further to  steal unique tokens resulting in cross-site forgery attacks.  A typical way to execute DOM-clobbering is to go to `document.body.innerHTML()` and pass in malicious code as the argument.

One XSS vulnerability is often enough to completely compromise the entire part of the application running in the browser. Take this into consideration when assessing the risk of XSS attacks against your application. 
 