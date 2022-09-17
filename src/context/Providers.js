import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { AppContext } from "./";
import { initialContext } from '../constants'

const Provider = ({ children }) => {
  const [state, setState] = useState(initialContext);
  const providerValue = useMemo(
    () => ({
      state,
      setState: (updates) => {
        setState((prevState) => ({ ...prevState, ...updates }));
      },
    }),
    [state, setState]
  );

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
};

export { Provider };
