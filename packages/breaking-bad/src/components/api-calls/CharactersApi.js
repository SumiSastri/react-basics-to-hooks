import React, { useState, useEffect } from "react";
import axios from "axios";

import DisplayCharacterGrid from "../pages/characters/DisplayCharacterGrid";
import SearchInput from "../common/SearchInput";

const CharactersApi = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQueryField, setSearchQueryField] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${searchQueryField}`
      );
      console.log("api-data-check", result.data);
      setCharacters(result.data);
      console.log("setCharacters-check", result.data);
      setIsLoading(false);
    };
    fetchCharacters();
  }, [searchQueryField]);

  const searchCharacters = (searchQueryField) =>
    setSearchQueryField(searchQueryField);

  return (
    <div>
      <SearchInput searchCharacters={searchCharacters} />
      <DisplayCharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
};

export default CharactersApi;
