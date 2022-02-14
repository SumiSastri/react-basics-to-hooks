import React, { useState } from 'react';
import { Display } from './Display';

// STATEFUL BUTTON COMPONENT - STAGE 1

// event-handling - function declaration or in-line function
// ES-5
// function logRandomNumber() {
// 	console.log(Math.random());
// };


// ES-6
const logRandomNumber = () => {
	console.log(Math.random());
};

// the click handler can take any argument

// const handleClick = () => {
// 	setCounter(counter*2)
// }

const handleClick = () => {
	setCounter(counter + 1);
};

export const Button1 = () => {
	const [ counter, setCounter ] = useState(0);
	// const [ counter, setCounter ] = useState(5);
	// return <button>+1</button>;
	// return <button>{Math.random()}</button>;
	// return <button onClick={logRandomNumber}>{counter}</button>;
	// return <button onClick={() => console.log(Math.random())}>{counter}</button>;
	// return <button onClick={() => setCounter(counter * 2)}>{counter}</button>;
	return <button onClick={handleClick}>{counter}</button>;
};
// 4 ways to render JSX with adjacent components

// Render the JSX as elements in an array
ReactDOM.render
([<Button />, <Display/>], document.getElementById('mountNode'));

// Render the JSX enclosed in a div tag
ReactDOM.render(
	<div>
		<Button1 />
		<Display />
	</div>,
	document.getElementById('mountNode')
);

// Render the JSX enclosed in the HoC - React.Fragment
ReactDOM.render(
	<React.Fragment>
		<Button1 />
		<Display />
	</React.Fragment>,
	document.getElementById('mountNode')
);

// Render the JSX enclosed in a Fragment empty tag
ReactDOM.render(
	<>
		<Button1 />
		<Display />
	</>,
	document.getElementById('mountNode')
);
