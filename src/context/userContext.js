"use client";
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLogged: false,
  });

  const setUserContext = (payload) => {
    setUser({
      ...user,
      ...payload,
    });
  };

  const logout = () => {
    setUser({ isLogged: false });
    localStorage.removeItem("accessToken");
  };

  return (
    <UserContext.Provider value={{ user, setUserContext, logout }}>
      {children}
    </UserContext.Provider>
  );
};
