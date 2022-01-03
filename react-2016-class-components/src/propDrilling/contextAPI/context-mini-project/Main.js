import React from "react";

import Nav from "./components/Nav";
import Header from "./components/Header";
import InventoryList from "./components/InventoryList";
import { ThemeContextProvider } from "./contexts/ThemeContext/ThemeContextProvider";
import { AuthContextProvider } from "./contexts/AuthContext/AuthContextProvider";
import ToggleTheme from "./components/ToggleTheme";

function Main() {
  return (
    <div>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Nav />
          <Header />
          <InventoryList />
          <ToggleTheme />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default Main;
