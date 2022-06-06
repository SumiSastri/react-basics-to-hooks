import React from "react";

import DisplayCharacter from "./DisplayCharacter";
import Loading from "../../common/Loading";

const DisplayCharacterGrid = ({ characters, isLoading }) => {
  return isLoading ? (
    <section>
      <Loading></Loading>
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
