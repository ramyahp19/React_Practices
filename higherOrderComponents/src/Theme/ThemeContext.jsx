import React, { createContext } from "react";

export const ThemeContext = createContext();

const Theme = {
  light: {
    backgroundColor: "black",
  },
  dark: {
    backgroundColor: "white",
  },
};

export default Theme;