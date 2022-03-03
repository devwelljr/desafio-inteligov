import React from "react";
import { node } from "prop-types";
import Context from "./Context";

function Provider({ children }) {
  return (
    <Context.Provider
      value={{
      }}
    >
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;