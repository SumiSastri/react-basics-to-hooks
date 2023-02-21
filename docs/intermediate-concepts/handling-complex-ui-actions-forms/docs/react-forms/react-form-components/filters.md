**Filter types and their adoption in forms**

Filters offer the user multiple ways of selecting and searching for data. Drop-downs are good for small data-sets while a search covers larger bodies of text.

## Drop downs or select filters

Steps to create a drop down filter list. Example in [src/components/filters/SelectFilterComponent.js]

1. A select filter is made up of a select JSX with nested options JSX tags

```
				<select>
						<option>
						</option>
				</select>
```

2. Create a functional component and deconstruct the props you would use in the `<select/>` JSX tag - data is one prop that you can use to import data from a static FE file or from an API call.
3. You are returning a `select` JSX tag
4. Between the opening and closing tags you are mapping the data choices into one `<option/>` JSX tag

```

					{data.map((options) => (
						<option key={options.id} value={options.value}>
							{options.label}
						</option>
					))}
```

5. Depending where your data is stored (state-management strategy) utility functions will need to be written to map the data into the `<option/>` JSX

6. If you wish to add typescript the value also has to be defined as a string in the change event

**Formik**

Formik makes this whole process much easier - in the Formik section

1. Create an Input field with the Formik Library and the HoC Field component
2. Import the Formik Error message component that has been created with Formik Error object
3. The Form props are control, label, name and type - control is input
4. Write the switch statement that controls the control prop - case is select for select filters
5. Import and use in a form

- define initial value
- set validation rules
- populate props

You can also use the React Select library

Documentation:
https://react-select.com/home

## Search filters

Search Filter - an example is in the file [src/components/content-pages/PostIndex.js]

The search filter is nothing but an input field. Functionality comes from the utility functions written in the component that imports the input field. Uncomment the FormInputField and you will see they work exactly in the same way. The only reason you may want to have a separate component is to style it differently.

Steps (in the file it is being called in)

1. Call the data from an API set it to state in the `componentDidMount()` lifecycle method
2. Map over the response object and print list to render it in a relevant list component
3. Replace the map method by the filter method - see comments on the page on how to refactor.

- The search filter utility function is written in the render method
- Filter through the response object that has been called and set to state (displayPosts)
- Assign the function to a variable - identify the props to filter through - title & body
- Set both the search field and the returned filtered array to lowercase to match cases

Research:
Code Sandbox example: https://codesandbox.io/s/2qv78?module=/example&file=/example.js
