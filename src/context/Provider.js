import React, { useState } from "react";
import { node } from "prop-types";
import Context from "./Context";

function Provider({ children }) {
  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{
        user,
        setUser,
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
