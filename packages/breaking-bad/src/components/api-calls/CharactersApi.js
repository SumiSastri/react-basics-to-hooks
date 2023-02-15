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
        `https://www.breakingbadapi.com/api/characters?name=${searchQueryField}`,
        {
          mode: "cors",
          credentials: "include",
          headers: {
            "Access-Control-Allow-Origin": "http://192.168.1.212:3001",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Max-Age": 5,
            "Access-Control-Allow-Methods": "GET",
          },
          responseType: "json",
        }
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
