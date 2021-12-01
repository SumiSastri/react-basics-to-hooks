import React, { Component } from "react";

export class refsDemo extends Component {
  // create a ref in the constructor method to reference the create.ref() method in the component
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    // Method2: the ref needs to be set to null
    // this.callBackRef = null;
    // assign the call back ref to a DOM element as the param of the function
    // this.setCallBackRef = (element) => {
    //   this.callBackRef = element;
    // };
  }

  // points to the DOM node referenced -> the ref can call the focus() method -> main use case
  componentDidMount = () => {
    //   focusing an element is the most common use case for the ref
    this.inputRef.current.focus();
    console.log(this.inputRef);

    // Method 2:
    // if the callBack is not null then access the method
    // if (this.callBackRef) {
    //   this.callBackRef.focus();
    // }
  };

  // find the value of the ref in the DOM node -> fetch the input value 2nd use case
  handleClick = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        {/* connect the method to the ref attribute */}
        <input type="text" ref={this.inputRef}></input>
        <button onClick={this.handleClick}>Find ref in the DOM node</button>

        {/* Method2 */}
        {/* <input type="text" ref={this.setCallBackRef}></input> */}
      </div>
    );
  }
}

export default refsDemo;
