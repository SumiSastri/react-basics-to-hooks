// paste this demo into jscomplete.com/playground
// try typing in the input field Hello World
// you will not be able to as every node in the DOM needs to be updated in real-time
// do the same with the React input field

const render = () => {
	document.getElementById('mountNode').innerHTML = `
      <div>
        Hello HTML
        <input />
        <p>${new Date().toLocaleTimeString()}</p>
      </div>
    `;

	// The react input field updates in the virtual-DOM
	// the div, the p tag are not updated
	// only the input field is updated and the DOM-tree algo rebases the DOM tree
	// The react component library 'reacts' only to changes in a specific components needs in the DOM tree

	ReactDOM.render(
		React.createElement(
			'div',
			null,
			'Hello React',
			React.createElement('input', null),
			React.createElement('p', null, new Date().toLocaleTimeString())
		),
		document.getElementById('mountNode2')
	);
};

setInterval(render, 1000);
