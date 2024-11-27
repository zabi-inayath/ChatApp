import React, { createContext, useState, useContext } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initailUserState = Cookies.get("jwt") || localStorage.getItem("msg");

  //parsing the user data and storing in state
  const [authUser, setAuthUser] = useState(
    initailUserState ? JSON.parse(initailUserState) : undefined
  );

  return (
    <AuthContext.Provider value={[ authUser, setAuthUser ]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);