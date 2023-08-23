import React from "react";

const SearchBox = ({ handleChange }) => {
  return (
    <div>
      <input
        className="p-2 m-2"
        type="text"
        placeholder="search..."
        onChange={handleChange}
      ></input>
      {/* <button onClick={handleSubmit}>search!</button> */}
    </div>
  );
};

export default SearchBox;
