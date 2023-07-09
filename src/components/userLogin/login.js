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
import { useAuth } from "../../context/userContext";
import { UserContext } from "../../context/userContext";
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

  const { setUserContext } = useContext(UserContext);
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
    if (username.trim() === "") {
      setUsername("Email -ээ оруулна уу.");
    } else if (password.trim() === "") {
      setPassword("password -аа оруулна уу.");
    }

    try {
      const response = await axios.post("/api/user/login", {
        username,
        password,
      });
      const id = response.data.data._id;
      const phone = response.data.data.phone;
      const firstName = response.data.data.firstName;
      const lastName = response.data.data.lastName;
      const balance = response.data.data.balance;
      localStorage.setItem("accessToken", response.data.token);
      const payload = {
        email: username,
        phone: phone,
        firstName: firstName,
        lastName: lastName,
        balance: balance,
        id: id,
        isLogged: true,
      };
      setUserContext(payload);

      if (response.data.success === true) handleClose();

      setState({
        ...state,
        user: response.data.data,
        isLogged: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={{
            textAlign: "center",
            marginTop: "2rem",
            justifyContent: "center",
            width: "27rem",
          }}
        >
          <DialogTitle color="primary" fontWeight="bold">
            Тавтай морил
          </DialogTitle>
          <DialogContent>
            <TextField
              label="Имэйл"
              onChange={(e) => setUsername(e.target.value)}
              helperText={username}
              error={!!username}
              margin="normal"
              sx={{
                width: "22rem",
              }}
            />
            <TextField
              label="Нууц үг"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              helperText={password}
              error={!!password}
              margin="normal"
              sx={{
                width: "22rem",
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
                width: "22rem",
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
