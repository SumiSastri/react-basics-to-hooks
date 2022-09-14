import React, { Component } from "react";

import { Welcome } from "../functionalComponents/Welcome";

export class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Good morning",
    };
  }

  addMessage() {
    this.setState({
      message: "The only gorilla I see is you :-)",
    });
  }
  // components render props or state
  render(props) {
    // const { name, noise } = this.props;
    const { message } = this.state;
    return (
      <div>
            <Welcome
            name="Priscilla"
            title="Ms"
            petAnimal="gorilla"
            />
            Priscilla replied:" {message} "
            <br/>
          <button onClick={() => this.addMessage()}>Click to what she really wanted to say</button>    
      </div>
    );
  }
}

export default Message;
