// import React, { Component } from "react";
// import "./Card.css";

const Card = ({name, img}) => {
 

    // console.log('data', this.state.data);
    // console.log("img url", this.state.img);
    return (
      <div className=" bg-emerald-500 flex overflow-hidden py-4 h-36 rounded-lg">
        <div className="flex place-items-center m-4">
          <img
            className=""
            alt={`${name}_img`}
            src={img}
          ></img>
        </div>
        <h1 className="text-center">{name}</h1>
      </div>
    );
  
}

export default Card;
