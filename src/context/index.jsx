import React, { createContext, useReducer } from "react";
import { rootReducer, initialState, rematched } from "../store";

export const GlobalContext = createContext(Object());

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch: rematched(dispatch) }}>
      {children}
    </GlobalContext.Provider>
  );
};
