// HOOKS REFACTOR
import React, { useState } from 'react';
// import React, { Component } from 'react';
// REDUX REFACTOR
import { connect } from 'react-redux';

const ToDoForm = () => {
	[ formInputs, setFormInputs ] = useState('');

	return (
		<div name="id" id={id}>
			<form onSubmit={this.handleSubmit}>
				<input
					label="What I need to do next:"
					className="inpt-b1m"
					datatestid="inpt-create-to-do"
					name="title"
					placeholder="Add items here"
					type="text-area"
					value={formInputs}
					onChange={(e) => setFormInputs(e.target.value)}
				/>

				<span name="title">{formInputs}</span>
				<span name="completed">{completed}</span>
				<br />
				<button color="info" onSubmit={this.handleSubmit}>
					Create & Submit
				</button>
			</form>
		</div>
	);
};
const mapStateToProps = (state = {});
const mapDispatchToProps = dispatch({});
export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);
// export default ToDoForm;
