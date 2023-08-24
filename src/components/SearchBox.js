import React from "react";

const SearchBox = ({ handleChange }) => {
  return (
    <div className="">
      <input
        className="p-2 m-2 rounded-lg"
        type="text"
        placeholder="search..."
        onChange={handleChange}
      ></input>
      {/* <button onClick={handleSubmit}>search!</button> */}
    </div>
  );
};

export default SearchBox;
