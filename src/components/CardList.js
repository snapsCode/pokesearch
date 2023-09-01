import React from "react";
import Card from "./Card";

const CardList = ({ list }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-4">
      {list.map((item) => {
        return <Card key={item.id} pokemon={item}/>;
      })}
    </div>
  );
};

export default CardList;
