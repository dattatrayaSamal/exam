import { createContext } from "react";
import React, { useState } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  let token = Boolean(localStorage.getItem("authToken")); //string
  const [isLoggedIn, setIsLoggedIn] = useState(token);
  const handleLogin = () => {
    localStorage.setItem("authToken", "bahubali");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
