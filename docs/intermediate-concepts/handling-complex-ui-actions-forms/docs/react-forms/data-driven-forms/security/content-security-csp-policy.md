
Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate Cross-Site Scripting (XSS) and data injection attacks. 

It can be configured in a `.yml` file 
eg:
```
customHeaders:
  - pattern: "**/*"
    headers:
      - key: Content-Security-Policy
        value: "default-src data: 'unsafe-inline' 'self' <white-listed urls>; script-src 'unsafe-inline' 'unsafe-eval' https: http:;"
      - key: Referrer-Policy
        value: no-referrer
      - key: Strict-Transport-Security
        value: max-age=31536000; includeSubDomains
      - key: X-Content-Type-Options
        value: nosniff
      - key: X-Frame-Options
        value: DENY
      - key: X-XSS-Protection
        value: 1; mode=block
```
or set in the headers of the `index.html` file.

eg: not a very strict csp policy - this can be locked down and customised
```
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self'; img-src *; child-src 'none';">
```

Docs [https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP]

CSP can also be defined in the headers of a the `fetch()` method:

Eg:
```
 fetch(url, {
      method: "POST",
      mode: "cors",
      redirect: "follow",
      cache: 'default',
      credentials: 'same-origin',
      // credentials: 'include',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      params: {
        userName,
        enquiryType,
        enquiryDate,
        enquiryText: enquiryText || "",
      },
      body: JSON.stringify(payrollInfoPayload),
    })
      .then(response => {
        // submit data and refetch to display new payload
        if (response.ok) { console.log(response, "SUCCESS: Submit PARAMS for form"); fetch(url) }
        if (!response.ok) {
          throw Error(Error, "ERR: payroll enquiry form Server error");
        }
        return response.json()
        .then(() =>  history.push("/forms-data-table"));   
      })
   ```   