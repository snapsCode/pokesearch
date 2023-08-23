import React from "react";
import Card from "./Card";

const CardList = ({ list }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 m-4">
      {list.map((listItem) => {
        return <Card key={listItem.id} name={listItem.name} img={listItem.sprites.front_default}/>;
      })}
    </div>
  );
};

export default CardList;
