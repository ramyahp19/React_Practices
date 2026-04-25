import React, { createContext } from "react";

export let ContextApi = createContext();

let YeshwanthPur = ({ children }) => {
  console.log(children);

  return (
    <ContextApi.Provider value={"pizaaa"}>
      {children}
    </ContextApi.Provider>
  );
};

export default YeshwanthPur;