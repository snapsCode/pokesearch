import React from "react";

const buttonStyle =
  "mx-auto my-4 bg-black rounded-lg p-1 text-white ease-out duration-300 hover:bg-white hover:text-black border-4 border-black";
const buttonDisabled =
  "mx-auto my-4 bg-black rounded-lg p-1 text-white disabled:opacity-75";

const GenButton = ({ genNum, handleGen, isDisabled }) => {
  return (
    <button
      disabled={isDisabled}
      className={isDisabled ? buttonDisabled : buttonStyle}
      onClick={handleGen}
      type="button"
    >
      <h2>Gen {genNum}</h2>
    </button>
  );
};

export default GenButton;
