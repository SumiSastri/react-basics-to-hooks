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
            In HTML forms state is retained and inputs entered by users update
            immediately. As state is not retained in inputs in React but in
            memory with the virtual DOM user inputs need to listen to an event
            and update. See the Forms-Hub repo in GitHub for a deeper dive into
            controlled components or form inputs.
          </p>
          <label>Text Field</label>
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
        <button className="btn-dark" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
