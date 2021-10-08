import React from 'react';

// Lifting state to App Component STAGE 2
// This is only responsible for handling the increment click

export const Button2 = (props) => {
	const handleClick = () => props.onClickIncr(props.incr);
	return <button onClick={handleClick}>+{props.incr}</button>;
};

// destructuring
// onClickIncr is the alias for the function that handles click function
// incr is the argument for this function which also needs to be passed down
// handleClick the function is a call-back and works with a void call due to JS closures

const Button2 = ({ onClickIncr, incr }) => {
	const handleClick = () => onClickIncr(incr);
	return <button onClick={handleClick}>+{incr}</button>;
};
