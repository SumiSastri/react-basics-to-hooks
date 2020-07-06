import React from "react";

import DisplayCharacter from "../characters/DisplayCharacter";

const DisplayCharacterGrid = ({ characters, isLoading }) => {
  return isLoading ? (
    <section>
      <p>Loading</p>
    </section>
  ) : (
    <section className="cards">
      {characters.map((character) => (
        <DisplayCharacter
          key={character.char_id}
          character={character}
        ></DisplayCharacter>
      ))}
    </section>
  );
};

export default DisplayCharacterGrid;
