import React, { useState, useEffect } from "react";
import axios from "axios";

import DisplayCharacterGrid from "../pages/characters/DisplayCharacterGrid";

const CharactersApi = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters`
      );
      console.log("api-data-check", result.data);
      setCharacters(result.data);
      console.log("setCharacters-check", result.data);
      setIsLoading(false);
    };
    fetchCharacters();
  }, []);

  return (
    <div>
      <DisplayCharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
};

export default CharactersApi;
