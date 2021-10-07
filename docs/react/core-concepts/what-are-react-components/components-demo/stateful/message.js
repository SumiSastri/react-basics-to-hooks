import React, { Component } from 'react';

export class Message extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: ''
		};
	}

	addMessage() {
		this.setState({
			message: 'grrr-sqarrk-woof-shreeeeek'
		});
	}

	render(props) {
		const { name, noise } = this.props;
		const { message } = this.state;
		return (
			<div>
				<h3>
					{name} says {noise} but when {name} is angry ...
					<button onClick={() => this.addMessage()}>Click to hear</button>
					<div>
						<h4>{message}</h4>
					</div>
				</h3>
			</div>
		);
	}
}

export default Message;
