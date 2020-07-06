import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: "",
      textAreaInput: "",
      selectFilter: "",
    };
  }

  handleTextInputChange = (event) => {
    this.setState({
      textInput: event.target.value,
    });
  };

  handleTextAreaInputChange = (event) => {
    this.setState({
      textAreaInput: event.target.value,
    });
  };

  handleSelectFilterChange = (event) => {
    this.setState({
      selectFilter: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `${this.state.textInput} ${this.state.textAreaInput} ${this.state.selectFilter}`
    );
  };

  render() {
    const { textAreaInput, textInput, selectFilter } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h4> Basic Form Inputs</h4>
          <p>
            In HTML, forms hold state therefore the data typed in is immediately
            submitted on click. However, in React state holds the data not the
            form input. Renders are first to the virtual DOM then the DOM.
            Therefore synthetic event handlers are created. In the 3 labels we
            have text inputs and a select filter. Functions are written for each
            of these. The initial state is set in the constructor. The synthetic
            event handler functions are written tto use the <em>setState()</em>{" "}
            method. State is now set to the <em>event.target.value </em> and
            passed as an expression into <em>onChange</em> attribute in the JSX
            that will capture the new values from the from the user text inputs.
            Finally the onSubmit click event submits the data to an alert
            message (in this instance - but the information can be submitted
            back to a server via an API call to a back-end database).
          </p>
          <label>Text Field </label>
          <input
            type="text"
            placeholder="Type text here"
            value={textInput}
            onChange={this.handleTextInputChange}
          />
        </div>
        <div>
          <label>Text Area</label>
          <textarea
            type="text"
            placeholder="Type text here"
            value={textAreaInput}
            onChange={this.handleTextAreaInputChange}
          />
        </div>
        <div>
          <label>Select Filter</label>
          <select value={selectFilter} onChange={this.handleSelectFilterChange}>
            <option value="Default">Scroll to select one</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
