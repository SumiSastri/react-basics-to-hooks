**Steps to create a reusable component for headers & footers**

1. Headers across a form library often have what the purpose of the form is and some branding.

2. Import the react libaray and create a functional component, decide the props for this component and deconstruct them. Not all the props need to be used but it is useful to outline the key ones you may need.

This is a sample with children as props that can be reused and customised as required.

```
import React from 'react';

export const HeaderComponent = ({ children, className, datatestid, id, image, name, onClick }) => {
	return (
		<div className={className} datatestid={datatestid} id={id} image={image} name={name} onClick={onClick}>
			{
				children
				// = {// <div>
				//     <img className={className} alt="logo" src={logo} />
				// </div>
				// <h2>Header</h2>
				// <h5>Subheader</h5>}
				
			}
		</div>
	);
};
```

3. Using the children props

Import the custom component and use children as a prop with the custom jsx within the child prop - import images and styles as required and depending on the css-library styles decisions.
 
```
<HeaderComponent datatestid="id-name" name={'header-component-name'}
				children={
					<section>
						<div>{/* <img alt="logo" src={logo} /> */}</div>
						<h2>Some header </h2>
						<h5>Some subheader</h5>
					</section>
				}
>


			</HeaderComponent>

```


__Note__ The closing tag of the JSX is after the children prop. Styles have been imported into this forms hub page but may not in another method of styling. Logo image has to be imported into the component where it will be rendered.		

4. Footers have been created in a similar design pattern with a note that footers may have list items so the children could contain JSX elements for unordered lists and links

5. Navs - There are 3 key elements in a nav
- branding
- links to navigate
- header text

The key challenge with navs is in the css - mobile-friendly css -tbc