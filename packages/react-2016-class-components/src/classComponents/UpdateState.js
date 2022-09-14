import React, { Component } from "react";

import Message from "./Message";
export class UpdateState extends Component {
  constructor() {
    super();

    this.state = {
      data: "I am the initial data in the state object",
    };
  }

  updateData() {
    this.setState({
      data: "I have been updated with the setState Method",
    });
  }

  render() {
    return (
      <div>
        <br/>
        <h4>Example 7: Use the setState() method to update data that the component renders </h4>
        <p>
          State as an object is readable and writable. However if you change
          state directly in the constructor method it will update in the console
          and will not be rendered. 
          
          This is because the render() method has been written so that you can
          use a callback function to check if the state has been updated and then
          render this updated state.
          
          To effectively do this a function must be written to update state using the
          <em>setState()</em>{""} method. 
          <br/>
          DEMO: When you click the button below, the call back function written in the onClick() method
          uses the callback method in the render() function and uses the data that has been defined
          in the setState() method.
        </p>
        <p>
          State: <span className="badge">{this.state.data}</span>
        </p>
        <button className="btn-light" onClick={() => this.updateData()}>
          Click me
        </button>
        <Message/>
      </div>
    );
  }
}
