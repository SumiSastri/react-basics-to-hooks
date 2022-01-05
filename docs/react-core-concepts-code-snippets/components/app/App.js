import React from 'react';

import { Greet } from './functional/HelloWorld';
import { GreetName } from './functional/HelloName';
import { Message } from './stateful/message';
import { Counter } from './stateful/counter';

function App() {
	return (
		<div className="App">
			<Greet welcome="Welcome to this React Quiz App." example="Follow the code in the components" />
			<GreetName title="Mr." name="Chips" petAnimal="dog">
				<p>Chips likes walks on Hampstead Heath</p>
				<p>Mr. Chips is good natured and likes to wag his tail at all the passers by</p>
			</GreetName>
			<Message noise="Woof" name="Mr.Chips" />
			<Counter />
			<GreetName title="Miss" name="Candy" petAnimal="parrot">
				<p>Candy likes to sit on my dog, Mr. Chips' shoulder.</p>
				<p />
			</GreetName>
			<Message noise="Squarrrk" name="Miss Candy" />
		</div>
	);
}

export default App;
