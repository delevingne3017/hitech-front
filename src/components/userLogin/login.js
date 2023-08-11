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
  Snackbar,
  Alert,
} from "@mui/material";
import Register from "./register";
import { UserContext } from "../../context/userContext";
import axios from "axios";
import ForgotPass from "./forgotPassword";

const LoginForm = ({
  open,
  handleOpen,
  handleClose,
  handleOpenRegister,
  ...props
}) => {
  var [username, setUsername] = useState("");
  var [password, setPassword] = useState("");
  const [state, setState] = useState({
    passOpen: false,
    loginOpen: false,
    openSnackBar: false,
    snackbarText: "",
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

  const [snackbarState, setSnackbarState] = useState({
    open: false,
    text: "",
    severity: "error",
  });

  const handleLogin = async () => {
    if (!username.trim()) {
      setSnackbarState({
        open: true,
        text: "Имэйл хаяг оруулна уу.",
        severity: "error",
      });
      return;
    } else if (!password.trim()) {
      setSnackbarState({
        open: true,
        text: "Нууц үг оруулна уу.",
        severity: "error",
      });
      return;
    }

    try {
      const response = await axios.post("/api/user/login", {
        username,
        password,
      });

      if (response.data.success) {
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
        handleClose();
        setUsername("");
        setPassword("");
      } else {
        setSnackbarState({
          open: true,
          text: "Нэвтрэх нэр эсвэл нууц үг буруу байна.",
          severity: "error",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarState({ ...snackbarState, open: false });
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "450px",
            },
          },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            marginTop: "2rem",
            justifyContent: "center",
          }}
          marginX={{ xs: 0, md: "2rem", lg: "2rem" }}
        >
          <DialogTitle color="primary" fontWeight="bold">
            Тавтай морил
          </DialogTitle>
          <DialogContent>
            <TextField
              label="Имэйл"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={!!username && !username.trim()}
              margin="normal"
              helperText={
                !!username && !username.trim() ? "Имэйл хаяг оруулна уу." : ""
              }
            />
            <TextField
              label="Нууц үг"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!password && !password.trim()}
              margin="normal"
              helperText={
                !!password && !password.trim() ? "Нууц үг оруулна уу." : ""
              }
            />
          </DialogContent>
          <Button onClick={handleOpenPass}>Нууц үг сэргээх </Button>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
              sx={{
                height: "3rem",
                fontWeight: "bold",
                margin: "0 1rem 0 1rem  ",
              }}
            >
              Нэвтрэх
            </Button>
          </DialogActions>

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
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={snackbarState.open}
          autoHideDuration={2000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbarState.severity}
            sx={{ width: "100%" }}
          >
            {snackbarState.text}
          </Alert>
        </Snackbar>
      </Dialog>
    </>
  );
};

export default LoginForm;
