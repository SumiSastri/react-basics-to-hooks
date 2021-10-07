import React, { useState } from 'react';
// SEE APP2.js for final refactor

// uni-directional data flow lift state to parent to flow to children
import { Button2 } from './Button2';
import { Display } from './Display';

// adding props to components
const App = () => {
	// display component displays counter initial state as a prop
	const [ counter, setCounter ] = useState(5);

	// button2 component gets the methods as props
	const incrementByOne = () => {
		setCounter(counter + 1);
	};
	const doubleCount = () => {
		setCounter(counter * 2);
	};
	const incrementByRandomNumber = () => {
		setCounter(Math.random());
	};

	// reusable function
	const incCounter = (incValue) => {
		setCounter(counter + incValue);
	};
	return (
		<div>
			<Button2 onClickIncrement={incrementByOne} />
			<Button2 onClickIncrement={doubleCount} />
			<Button2 onClickIncrement={incrementByRandomNumber} />
			<Button2 onClickIncrement={incCounter} increment={1} />
			<Button2 onClickIncrement={incCounter} increment={Math.random()} />
			<Button2 onClickIncrement={incCounter} increment={5 * 2} />

			<Display textDisplay={counter} />
		</div>
	);

	ReactDOM.render(<App />, document.getElementById('mountNode'));
};
