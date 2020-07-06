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
  render() {
    return (
      <div>
        <h4>Component Update demo</h4>
        <p>
          The two life-cycle methods used here are componentDidMount and
          componentDidUpdate
        </p>
        <p>
          The title tab of this document has been clicked {this.state.count}{" "}
          times
        </p>
        <input
          type="text"
          value={this.state.name}
          placeholder="Type text here"
          onChange={this.handleInputChange}
        ></input>
        <button className="btn" onClick={this.handleUpdateCountClick}>
          Click to update title tag
        </button>
      </div>
    );
  }
}

export default ComponentUpdateMethod;
