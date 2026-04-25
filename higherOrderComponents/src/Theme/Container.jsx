import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const Container = () => {
  const { light, dark } = useContext(ThemeContext);

  const [state, setState] = useState(true);

  const handleTheme = () => {
    setState(!state);
  };

  return (
    <div>
      <div
        id="max"
        style={state ? light : dark}
      ></div>

      <button onClick={handleTheme}>
        on/off
      </button>
    </div>
  );
};

export default Container;