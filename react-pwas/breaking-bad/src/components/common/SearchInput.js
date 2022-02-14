import React, { useState } from "react";

const SearchInput = ({ searchCharacters }) => {
  const [text, setText] = useState("");

  let onSearchChange = (searchQueryField) => {
    setText(searchQueryField);
    searchCharacters(searchQueryField);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={text}
        className="form-control"
        placeholder="Search for your favourite character"
        autoFocus
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
};
export default SearchInput;
