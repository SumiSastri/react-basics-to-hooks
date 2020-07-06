import React from "react";
import CharactersApi from "../../api-calls/CharactersApi";

const DisplayCharacterGrid = ({ characters, isLoading }) => {
  return isLoading ? (
    <section>
      <p>Loading</p>
    </section>
  ) : (
    <section className="cards">
      {characters.map((character) => (
        <li key={character.char_id}>{character.name}</li>
      ))}
    </section>
  );
};

export default DisplayCharacterGrid;
