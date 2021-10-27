import React from "react";
import "./App.css";
import CharactersCatalog from "./components/pages/characters/CharactersCatalog";

const App = () => {
  return (
    <div className="container">
      <h1>App using Hooks and Jest Testing Library</h1>
      <CharactersCatalog />
    </div>
  );
};

export default App;
