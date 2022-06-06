import React from "react";

function TextInputField({ textInput, handleTextInputChange }) {
  return (
    <div>
      <label>
        Form Text Input{""}:{""}{" "}
      </label>
      <input
        type="text"
        value={textInput}
        placeholder="Input text here"
        onChange={handleTextInputChange}
      />
    </div>
  );
}

export default TextInputField;
