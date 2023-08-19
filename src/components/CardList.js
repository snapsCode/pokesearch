import React from "react";
import Card from "./Card";

const CardList = ({ list }) => {
  return (
    <div className="grid gap-4">
      {list.map((listItem) => {
        return <Card name={listItem.name}/>;
      })}
    </div>
  );
};

export default CardList;
