// sibling of Button - presentational component
// this only is responsible for the display of the text
// Separation of concerns or responsibility isolation

export const Display = (props) => {
	return <div>{props.textDisplay}</div>;
};

// destructuring
const Display = ({ textDisplay }) => {
	return <div>{textDisplay}</div>;
};
