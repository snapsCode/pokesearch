import React from "react";
import "./Card.scss";

const Card = ({ pokemon }) => {
  const capitalize = (str) => {
    const result = str[0].toUpperCase().concat(str.slice(1));
    return result;
  };
  return (
    <div className="bg-red-400 flex overflow-hidden  py-4 h-36 rounded-lg  hover:bg-red-500 ease-out duration-300 border-4 border-red-700 drop-shadow-lg">
      {/* <img className="w-5 h-5" alt="pokeball" src="./pokeball.png"/> */}
      <div className="mx-4 my-auto rounded-lg border-4 border-gray-600">
        <img
          className="w-24 h-24 bg-gray-400 rounded-sm"
          alt={`${pokemon.name}_img`}
          src={pokemon.sprites.front_default}
        ></img>
      </div>

      <div className="absolute xxs:ml-36 sm:ml-36 md:ml-36 lg:ml-46 my-2 grid justify-items-start info ">
        <h2 className="">#{pokemon.id}</h2>
        <h2 className="text-start text-ellipsis  md:w-25 lg:w-50">
          {capitalize(pokemon.name)}
        </h2>

        <h2 className="text-start text-xs">
          {pokemon.types.map((type) => type.type.name + " ")}
        </h2>
      </div>
    </div>
  );
};

export default Card;
