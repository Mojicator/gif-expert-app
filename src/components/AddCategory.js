import React, { useState } from "react";
import PropTypes from "prop-types";

const INPUT_MESSAGE = "Type something...";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Category</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputValue}
        placeholder={INPUT_MESSAGE}
        required
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
