import React, { useState, useEffect } from "react";
import axios from "axios";

const CharactersApi = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters`
      );
      console.log(result.data);
    };
    fetchCharacters();
  }, []);

  return (
    <div>
      <h4>API call for data</h4>
    </div>
  );
};

export default CharactersApi;
