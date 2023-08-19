import React from "react";

const SearchBox = ({handleSubmit, searchChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="p-2 m-2"
        type="search"
        placeholder="search..."
        onChange={searchChange}
      ></input>
    </form>
  );
};

export default SearchBox;
