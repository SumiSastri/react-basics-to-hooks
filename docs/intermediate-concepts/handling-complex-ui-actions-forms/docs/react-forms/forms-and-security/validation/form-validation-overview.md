# How to validate React Form data

__Why do we need to validate form data?__

Forms are the first point of customer data-capture. 

From the point of input of the data from the user, to the onward flow of data into data-bases or customer-relationship-management systems, data that is captured must be accurate and all mandatory fields completed.

This helps business processes such as customer services, fulfilment and delivery of goods and services, financial transactions and payments as well as marketing and sales communications.

With legal constraints of Data Protection and Data Privacy International conventions the need for data-validation at every point of interaction with user data is part of a security-by-design policy that must be adhered to as a mandatory legal requirement.

Data is a valuable commodity and sensitive data is even more important. An example of these fields are age, gender, date of birth, address proofs, phone numbers, emails as well as religious, political beliefs and medical conditions.

Given the wealth of personal data any applications may require to validate an individual's identity, data validation is no longer a nice-to-have in the development process but a must-have. It is an essential requirement for efficient business operations but also due to legal compliance considerations.

__Pre-requisites before coding begins__

Form validation is important both in the front-end and back-end for data-integrity and harmonisation of fields across the stack. 

At a high-level, even before the engineers begin coding is for the business to determine what is the business logic of data-validation. 

For example, what form fields are required, which ones are optional. Why do you need the data you need to capture? If you capture the applications' user names for example, can a name accept hypens, Roman numerals, punctation and diacrytical alphabets (super text accents on Roman alphabets)? 

This must happen before the development process even begins.

__Decisions with the React Component Library__

Once the design and business logic of the forms have been captured and the engineering team is ready to develop the data-input forms, the next step with an application using the React library is to make a few library add-on decisions.

- Are you going to use TypeScript and ensure stricter typing as a form of validation
- Will you use an external form library like Formik or custom hooks like the `useForm` hook that is an add-on to the React Component library
- Will you use a validation library or vanilla JavaScript functions. The most common JavaScript validation library through the stack (if you use NodeJs as a back-end environment) is Yup.
- How will you test validation - what testing library will you use and how to implement testing with the React-testing-library that the CRA (create-react-app) package ships with

