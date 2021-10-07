import React from 'react';

// params are props - an object - named export
export const GreetName = (props) => {
	console.log(props);
	const { title, name, petAnimal, children } = props;
	// return is a call back method - hence the parenthesis not curly braces
	return (
		<div>
			<h1>
				{title} {name} is my {petAnimal}
			</h1>
			{/* children is an inbuilt prop */}
			{children}
		</div>
	);
};
