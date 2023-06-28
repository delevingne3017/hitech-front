"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import Register from "./register";
import { useAuth } from "../userContext";
import { UserContext } from "../userContext";
import { useRouter } from "next/router";
import axios from "axios";
import ForgotPass from "./forgotPassword";
import jwt_decode from "jwt-decode";

const LoginForm = ({
  open,
  handleOpen,
  handleClose,
  handleOpenRegister,
  ...props
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState({
    passOpen: false,
    loginOpen: false,
    user: {},
  });

  //const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  const { setUserContext, logout } = useContext(UserContext);
  const handleOpenPass = () => {
    setState({
      ...state,
      loginOpen: false,
      passOpen: true,
    });
  };
  const handleOpenLogin = () => {
    setState({
      ...state,
      loginOpen: true,
      passOpen: false,
    });
  };

  const handleLogin = async () => {
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!emailRegex.test(username)) {
      setUsername("Email формат буруу байна.");
    } else setUsername("");

    if (!password || !password.length) {
      setPassword("Нууц үгээ оруулна уу.");
    } else setPassword("");
    try {
      const response = await axios.post("/api/user/login", {
        username,
        password,
      });
      const _id = response.data.data._id;
      localStorage.setItem("accessToken", response.data.token);
      const payload = { email: username, id: _id, isLogged: true };
      setUserContext(payload);
      setState({
        ...state,
        user: response.data.data,
        isLogged: true,
      });
    } catch (error) {
      console.error(error);
    }
    handleClose();
    return true;
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={{
            textAlign: "center",
            marginTop: "2rem",
            justifyContent: "center",
            width: "30rem",
          }}
        >
          <DialogTitle color="primary" fontWeight="bold">
            Тавтай морил
          </DialogTitle>
          <DialogContent>
            <TextField
              label="Username"
              onChange={(e) => setUsername(e.target.value)}
              error={username && username.length ? true : false}
              margin="normal"
              sx={{
                width: "25rem",
              }}
            />
            <TextField
              label="Password"
              error={password && password.length ? true : false}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              sx={{
                width: "25rem",
              }}
            />
          </DialogContent>
          <Button onClick={handleOpenPass}>Нууц үг сэргээх </Button>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              sx={{
                margin: "auto",
                width: "25rem",
                height: "3rem",
                fontWeight: "bold",
              }}
            >
              Нэвтрэх
            </Button>
          </DialogActions>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: ".9rem",
              backgroundColor: "#e1eff2",
              height: "3rem",
            }}
          >
            <Typography>Шинэ хаяг нээх? </Typography>
            <Button onClick={handleOpenRegister}>Бүртгүүлэх </Button>
          </Box>
          <ForgotPass
            open={state.passOpen}
            handleOpen={handleOpenPass}
            handleOpenLogin={handleOpenLogin}
            handleClose={() => {
              setState({
                ...state,
                passOpen: false,
              });
            }}
          />
        </Box>
      </Dialog>
    </>
  );
};

export default LoginForm;
