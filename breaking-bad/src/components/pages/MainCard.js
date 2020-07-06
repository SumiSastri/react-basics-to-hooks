import React from "react";
import NavBar from "../common/Navbar";
import CharactersApi from "../api-calls/CharactersApi";

const MainCard = () => {
  return (
    <div>
      <NavBar />
      <h3>Placeholder: Cards</h3>
      <CharactersApi />
    </div>
  );
};

export default MainCard;
