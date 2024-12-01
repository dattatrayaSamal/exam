import React, { useContext } from "react";

export let PrivateRoute = ({ children }) => {
  const { isAdmin } = useContext;
  return isAdmin ? children : <Navigate to="/not-admin" />;
};
