import React from "react";

const DisplayCharacter = ({ character }) => {
  console.log(character);
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={character.img} alt="" />
        </div>
        <div className="card-back">
          <h3>{character.name}</h3>
          <ul>
            <li>
              <strong>Actor Name:</strong> {character.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {character.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {character.birthday}
            </li>
            <li>
              <strong>Alive or Dead?</strong> {character.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DisplayCharacter;
