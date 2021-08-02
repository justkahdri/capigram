import { useApolloClient } from "@apollo/client";
import React, { createContext, useState, useContext, FC } from "react";

export const AppContext = createContext<ContextProps>({
  isAuth: false,
  activateAuth: () => {
    console.error("Authentication not initialized"); // TODO Handle this initialState better
  },
  removeAuth: () => {
    console.error("Context not initialized"); // TODO Handle this initialState better
  },
});

export const ContextProvider: FC = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    if (typeof window !== "undefined") {
      const token = window.sessionStorage.getItem("user_token");
      return !!token;
    } else return false;
  });
  const client = useApolloClient();
  const initialState: ContextProps = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true);
      window.sessionStorage.setItem("user_token", token);
    },
    removeAuth: () => {
      setIsAuth(false);
      window.sessionStorage.removeItem("user_token");
      client.resetStore();
    },
  };

  return (
    <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
