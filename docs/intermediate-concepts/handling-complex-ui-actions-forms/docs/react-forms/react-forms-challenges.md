# Why are forms important in the development process?

A form captures data from users and sends this data to backend services - databases (DBs), customer-relationship-management(CRMs), business-intelligence (BI) platforms and more.

Forms are important in the development process as they hold state and this state then needs to be passed on to these inter-related services that are dependent on this information being accurate.

State (or the data captured) is ephemeral (not permanent) at the point of capture with React-forms.

Unlike HTML which retains state, React forms need state to be captured and stored in the browser then passed on to backend systems.

Forms and capturing the state in forms gives the business team insights into user needs. It is a way of transfering state from the user's dynamic inputs into a database.

Forms are often abandoned, so saving information as the user inputs it, auto-completion and validation are important to sift out valuable state from hack-attacks. Malicious data from bots can input state into forms that provide incorrect or malicious information as a way of getting into the app servers.

Once again state-management in forms therefore needs to be more thoughtful and data-validated.

# Key challenges

1. Where does state get captured (on which page and input)
2. How is the data validated as accurate - is an email an email or an address valid?
3. If the data is a string, number or boolean how do these react to user input?
4. What design inputs are required - text areas, check boxes, radio buttons?
5. How is data captured in each of these design elements
6. How is the data submitted from one page to another in the front end in a multi-part form from these inputs
7. Can data be deleted, updated, cleared?
8. How and where can we manage state? Where do props fit into this?
9. How do we handle change events and other user events on a page?
10. How do we render this data?
11. With login-log outs how are users authenticated?
12. Once authenticated how is the information they see controlled to their user type?
13. Once all the data is captured how can we access this data again to re-use in search filters and other data-displays of this information (for eg: in a table)
14. Forms are also a security challenge - they are the first point of call for a hack-attack.
15. Accessibility - best practice for differently abled users is a challenge and ui-ux design is important to ensure max accessibility to the widest audience of all abilities

These challenges make designing and implementing forms in React a challenge of state-management as well as good design and accurate data capture.
