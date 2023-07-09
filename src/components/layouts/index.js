"use client";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import axios from "axios";
const MainLayout = ({ children }) => {
  const { user, setUserContext, logout } = useContext(UserContext);

  const getUserInfo = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (token) {
        const decodedToken = jwt_decode(token);
        if (decodedToken.exp > Date.now() / 1000) {
          console.log("decodedToken:", decodedToken);

          const response = await axios.get(`/api/user/${decodedToken.userId}`);

          console.log("fetched user:", response.data.data);
          setUserContext({
            isLogged: true,
            //fetched user info
            ...response.data.data,
          });
        } else {
          logout();
        }
      }
    } catch (err) {}
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return <>{children}</>;
};

export default MainLayout;
