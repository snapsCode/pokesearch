import React from "react";
import GenButton from "./GenButton";
// import "./ButtonList.scss";

// const buttonStyle =
//   "mx-auto my-4 bg-black rounded-lg p-1 text-white ease-out duration-300 hover:bg-white hover:text-black";
// const buttonDisabled =
//   "mx-auto my-4 bg-black rounded-lg p-1 text-white disabled:opacity-75";

const ButtonList = ({
  handleGen1,
  disableGen1,
  handleGen2,
  disableGen2,
  handleGen3,
  disableGen3,
  handleGen4,
  disableGen4,
  handleGen5,
  disableGen5,
  handleGen6,
  disableGen6,
  handleGen7,
  disableGen7,
  handleGen8,
  disableGen8,
  handleGen9,
  disableGen9,
}) => {
  return (
    <div className=" grid xxs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 justify-center">
      <GenButton genNum={1} handleGen={handleGen1} isDisabled={disableGen1} />
      <GenButton genNum={2} handleGen={handleGen2} isDisabled={disableGen2} />
      <GenButton genNum={3} handleGen={handleGen3} isDisabled={disableGen3} />
      <GenButton genNum={4} handleGen={handleGen4} isDisabled={disableGen4} />
      <GenButton genNum={5} handleGen={handleGen5} isDisabled={disableGen5} />
      <GenButton genNum={6} handleGen={handleGen6} isDisabled={disableGen6} />
      <GenButton genNum={7} handleGen={handleGen7} isDisabled={disableGen7} />
      <GenButton genNum={8} handleGen={handleGen8} isDisabled={disableGen8} />
      <GenButton genNum={9} handleGen={handleGen9} isDisabled={disableGen9} />
    </div>
  );
};

export default ButtonList;
