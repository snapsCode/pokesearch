// import React, { Component } from "react";
// import "./Card.css";

const Card = ({ pokemon }) => {
  // console.log('data', this.state.data);
  // console.log("img url", this.state.img);
  const capitalize = (str) => {
    const result = str[0].toUpperCase().concat(str.slice(1));
    return result;
  }
  capitalize(pokemon.name);
  return (
    <div className=" bg-red-400 flex overflow-hidden  py-4 h-36 rounded-lg">
      <div>
        <img
          className="w-24 h-24 m-4"
          alt={`${pokemon.name}_img`}
          src={pokemon.sprites.front_default}
        ></img>
      </div>

      <h2 className="flex items-center text-center">{capitalize(pokemon.name)}</h2>
    </div>
  );
};

export default Card;