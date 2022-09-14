import React, { useState} from 'react';
import ReactDOM from "react-dom"

// destructured props as method passed to Btn2
// onClickIncr is an attribute not an event handler
// the event handler takes the two props as the call back func
//  this can be tested on jscomplete.com/playground for functionality

const Button2 = ({ onClickIncr, incr }) => {
	const handleClick = () => onClickIncr(incr);
	return <button onClick={handleClick}>+{incr}</button>;
};

// destructured props passed down from parent to child - sibling of btn2
const Display = ({ textDisplay }) => {
	return <div>{textDisplay}</div>;
};

// lift state to app - ES6 & Hooks
const App = () => {
	const [ counter, setCounter ] = useState(0);
	// reusable function - set as attribute of prop - prop as a method
	const incrCount = (incrVal) => setCounter(counter + incrVal);
	return (
		<div>
			<Button2 onClickIncr={incrCount} incr={1} />
			<Button2 onClickIncr={incrCount} incr={Math.random()} />
			<Button2 onClickIncr={incrCount} incr={10 * 2} />
			<Button2 onClickIncr={incrCount} incr={100} />

			<Display textDisplay={counter} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('mountNode'));
