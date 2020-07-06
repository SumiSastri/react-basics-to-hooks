import React from "react";

import NavBar from "../../common/Navbar";
import CharactersApi from "../../api-calls/CharactersApi";
import SearchInput from "../../common/SearchInput";

const CharactersCatalog = () => {
  return (
    <div>
      <NavBar />
      <SearchInput />
      <CharactersApi />
    </div>
  );
};

export default CharactersCatalog;
