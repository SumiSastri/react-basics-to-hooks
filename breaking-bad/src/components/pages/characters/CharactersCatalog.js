import React from "react";

import NavBar from "../../common/Navbar";
import CharactersApi from "../../api-calls/CharactersApi";

const CharactersCatalog = () => {
  return (
    <div>
      <NavBar />
      <CharactersApi />
    </div>
  );
};

export default CharactersCatalog;
