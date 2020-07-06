// import React, { Component } from "react";

// import TextInputField from "../formComponents/TextInputField";
// import TextAreaField from "../formComponents/TextAreaField";
// import SelectFilter from "../formComponents/SelectFilter";
// import SubmitButton from "../formComponents/SubmitButton";

// export class MasterFormComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       textInput: "",
//       textAreaInput: "",
//       selectFilterOptions: "",
//     };
//   }
//   handleTextInputChange = (event) => {
//     this.setState({
//       textInput: event.target.value,
//     });
//   };

//   handleTextAreaChange = (event) => {
//     this.setState({
//       textAreaInput: event.target.value,
//     });
//   };

//   handleSelectFilterChange = (event) => {
//     this.setState({
//       selectFilterOptions: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     alert(
//       `${this.state.textInput} ${this.state.textAreaInput} ${this.state.selectFilterOptions}`
//     );
//     event.preventDefault();
//   };

//   render() {
//     const { textAreaInput, textInput, selectFilter } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <TextInputField />
//         <TextAreaField />
//         <SelectFilter />
//         <SubmitButton />
//       </form>
//     );
//   }
// }

// export default MasterFormComponent;
