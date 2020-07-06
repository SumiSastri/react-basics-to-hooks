import React from "react";

export default function SelectFilter({
  selectFilterOptions,
  handleSelectFilterChange,
}) {
  return (
    <div>
      <label>Select</label>
      <select value={selectFilterOptions} onChange={handleSelectFilterChange}>
        <option value="default option">Scroll to select one</option>
        <option value="option-one">Option 1</option>
        <option value="option-two">Option 2</option>
        <option value="option-three">Option 3</option>
      </select>
    </div>
  );
}
