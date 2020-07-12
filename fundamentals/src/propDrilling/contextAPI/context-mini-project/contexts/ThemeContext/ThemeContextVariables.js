import React from "react";

const ThemeContext = React.createContext(
  "Default value in the userContext variables file"
);
const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

export { ThemeProvider, ThemeConsumer };
export default ThemeContext;
// Note the name of the variables and the name of the class-component should be different
