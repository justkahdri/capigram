import React, { createContext, useState, useContext, FC } from "react";

export const AppContext = createContext<ContextProps>({
  isAuth: false,
  activateAuth: () => {
    console.error("Authentication not initialized"); // TODO Handle this initialState better
  },
});

export const ContextProvider: FC = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const initialState = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true);
    },
  };

  return (
    <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
