import React from 'react';

// unamed export - ES-5 - uses the function key word
// function Greet() {
// 	return (
// 		<div>
// 			<h1>Hello World</h1>
// 		</div>
// 	);
// }

// unamed export - ES-6
// uses const and let key words
// const Greet = () => (
// 	<div>
// 		<h1>Hello World</h1>
// 	</div>
// );

// export default Greet;

// named export with props
export const Greet = ({ welcome, example, children }) => (
	<div>
		<h1>Hello World</h1>
		{children}
		<div>
			<p>
				{welcome} {example}
			</p>
			{children}
		</div>
	</div>
);
