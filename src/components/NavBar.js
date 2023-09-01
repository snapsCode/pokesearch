import React from "react";
import SearchBox from "./SearchBox";
  
const NavBar = ({ handleChange }) => {
  return (
    <nav className="grid space-x-4 bg-slate-600">
      <h1 className=" text-4xl">Pokedex Search!</h1>
      {/* <div></div>
      <div></div> */}
      <SearchBox
        // handleSubmit={this.handleSubmit}
        handleChange={handleChange}
      />
    </nav>
  );
};

export default NavBar;
