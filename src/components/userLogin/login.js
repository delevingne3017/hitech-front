"use client";
import React, { useState } from "react";
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
import { useRouter } from "next/router";
import axios from "axios";

const LoginForm = ({
  open,
  handleOpen,
  handleClose,
  handleOpenRegister,
  ...props
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const response = await axios.post("/api/user/login", {
        username,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!emailRegex.test(username)) {
      setUsername("Email буруу байна.");
    } else setUsername("");

    if (!password || !password.length) {
      setPassword("Нууц үгээ оруулна уу.");
    } else setPassword("");
    try {
      const response = await axios.post("/api/user/login", {
        username,
        password,
      });
      localStorage.setItem("data", JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
    return true;
  };

  return (
    <>
      {/* <Button variant="contained" color="primary" onClick={handleOpen}>
        Нэвтрэх
      </Button> */}
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
              helperText={username}
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
              helperText={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              sx={{
                width: "25rem",
              }}
            />
          </DialogContent>
          <Button>Нууц үг сэргээх </Button>
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
        </Box>
      </Dialog>
    </>
  );
};

export default LoginForm;
