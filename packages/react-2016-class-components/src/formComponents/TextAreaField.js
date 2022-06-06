import React from "react";

export default function TextAreaField({ textAreaInput, handleTextAreaChange }) {
  return (
    <div>
      <label>Text Area Field</label>
      <textarea
        type="text"
        value={textAreaInput}
        placeholder="Input text here"
        onChange={handleTextAreaChange}
      />
    </div>
  );
}
