// rce for boiler plate in ES7
import React, { Component } from 'react';

export class Counter extends Component {
	// rconst for constructor
	constructor(props) {
		super(props);

		this.state = { count: 0 };
	}

	incrementVolume() {
		this.setState(
			{
				count: this.state.count + 1
			},
			() => {
				console.log(`Callback log value, ${this.state.count}`);
			}
		);
		console.log(`Sync log value, ${this.state.count}`);
	}

	incrementByFive() {
		this.setState((previousState) => ({
			count: previousState.count + 5
		}));
	}

	render() {
		return (
			<div>
				<h4>Volume level {this.state.count}</h4>
				<button onClick={() => this.incrementVolume()}>Increase volume</button>
				<button onClick={() => this.incrementByFive()}>Increase volume by 5 decibals</button>
			</div>
		);
	}
}

export default Counter;
