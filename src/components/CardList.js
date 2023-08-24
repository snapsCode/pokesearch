import React from "react";
import Card from "./Card";

const CardList = ({ list }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 p-4">
      {list.map((item) => {
        return <Card key={item.id} pokemon={item}/>;
      })}
    </div>
  );
};

export default CardList;
