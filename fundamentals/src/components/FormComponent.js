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
      `This is the parent component. Functions are written here and passed as props to the child. State now is updated in the child component and bound to the parent component's constructor method. So when you type and submit your input as a user in the child component, they are rendered in this alert which is also in the child submit button component. The default state renders an empty string and the default select filter. Type and select an option to test functionality of this form component.  TEXT-INPUT:${this.state.textInput} TEXT-AREA-INPUT:${this.state.textAreaInput} SELECT-FILTER-OPTION: ${this.state.selectFilter}`
    );
  };

  render() {
    const { textAreaInput, textInput, selectFilter } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h4>Basic Form Inputs</h4>
          <p>
            In HTML, forms hold state therefore the data typed in is immediately
            submitted on click. However, in React data is held in state, not the
            form input filed. Data needs to be passed from state to the form
            components by using factory functions to setState in the event
            handler of the components <em>onChange, onClick, onSubmit.</em>
          </p>
          <p>
            Child components like text inputs, buttons are created as child
            components of the stateful form component. In the stateful component
            the methods to handle the updated state are written and passed as
            props to the child component.
          </p>
          <label>Text Field (in parent component)</label>
          <input
            type="text"
            placeholder="Type text here"
            value={textInput}
            onChange={this.handleTextInputChange}
          />
        </div>
        <div>
          <label>Text Area(in parent component)</label>
          <textarea
            type="text"
            placeholder="Type text here"
            value={textAreaInput}
            onChange={this.handleTextAreaInputChange}
          />
        </div>
        <div>
          <label>Select Filter(in parent component)</label>
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
