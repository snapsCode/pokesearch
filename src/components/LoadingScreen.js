import React from "react";
import gif from './coochiem8_pokeball-loop (2).gif'

const LoadingScreen = () => {
  return (
    <div className=" w-screen h-96">
      <img
        className="mx-auto h-3/5 my-64"
        alt="loading..."
        src={gif}
      ></img>
    </div>
  );
};

export default LoadingScreen;
