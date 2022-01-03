import React from "react";

function SubmitButton({ handleSubmit }) {
  return (
    <div>
      <button type="submit" onSubmit={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default SubmitButton;
