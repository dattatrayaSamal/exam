import React, { createContext, useState } from "react";

export let AdminContext = createContext();

export let AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
