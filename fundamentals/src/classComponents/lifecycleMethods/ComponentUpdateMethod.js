import React, { Component } from "react";

export class ComponentUpdateMethod extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `Times clicked ${this.state.count}`;
  }

  componentDidUpdate(previousProps, previousState) {
    // console.log(`Updating document title1`);
    if (previousState.count !== this.state.count) {
      console.log(`Updating document title2`);
      document.title = `Times clicked ${this.state.count}`;
    }
  }
  handleUpdateCountClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  handleInputChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleInputChangeClick = (event) => {
    event.preventDefault();
    alert(`Text must be typed into the input to test: ${this.state.name}`);
  };

  render() {
    return (
      <div>
        <h4>DEMO: Mounting & Updating</h4>
        <p>
          The two life-cycle methods used here are componentDidMount and
          componentDidUpdate
        </p>
        <p>
          The title tab of this document has been clicked {this.state.count}{" "}
          times. Look at the title tab and you will see everytime the component
          is updated with a click that the number is displayed in the title and
          in this paragraph JSX tag. As JavaScript calls the stack with async
          calls, the function needs to specify the previous state and the
          current state for the click handler and the call stack to be in sync.
        </p>
        <button className="btn" onClick={this.handleUpdateCountClick}>
          Click to update title tag
        </button>
        <input
          type="text"
          value={this.state.name}
          placeholder="Type text here"
          onChange={this.handleInputChange}
        ></input>
        <button className="btn" onClick={this.handleInputChangeClick}>
          Click to update - this is a standard event handler compared to this
          text input
        </button>
      </div>
    );
  }
}

export default ComponentUpdateMethod;
