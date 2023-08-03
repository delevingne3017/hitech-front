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
  Snackbar,
  Alert,
} from "@mui/material";
import { Phone } from "@mui/icons-material";
import LoginForm from "./login";
import axios from "axios";

const Register = ({
  open,
  handleOpen,
  handleClose,
  handleOpenLogin,
  ...props
}) => {
  // const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phonedError, setPhoneError] = useState("");
  const [state, setState] = useState({
    openSnackBar: false,
    snackbarText: "",
  });
  const validation = () => {
    let successCount = 0;

    // Validate email format
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const specialCharsRegex = /[!@#$%^&*()]/;
    const uppercaseRegex = /[A-Z]/;
    if (email.trim() === "") {
      setEmailError("Email -ээ оруулна уу.");
    } else if (!emailRegex.test(email)) {
      setEmailError("Email зөв байна.");
    } else {
      successCount++;
    }
    if (password.trim() === "") {
      setPasswordError("password -аа оруулна уу.");
    } else if (password.length < 8) {
      setPasswordError("Password дорж хаяж 8 урттай байна.");
    } else if (!specialCharsRegex.test(password.trim())) {
      setPasswordError("Password тусгай тэмдэгт агуулна.");
    } else if (!uppercaseRegex.test(password.trim())) {
      setPasswordError("Password том жижиг үсэг агуулна.");
    } else {
      successCount++;
      setPasswordError("");
    }

    const phoneRegex = /^\d{8}$/; // Matches 8 digits
    if (!phoneRegex.test(phone.trim())) {
      setPhoneError("Утасны дугаараа оруулна уу.");
    } else {
      successCount++;
    }

    return successCount;
  };

  const handleSubmit = async () => {
    let num = 0;
    num = validation();
    if (num === 3) {
      try {
        const existingUser = await axios.get(`/api/user?email=${email}`);

        if (existingUser) {
          setState({
            openSnackBar: true,
            snackbarText: "Email аль хэдийн бүртгэгдсэн байна.",
          });
          return;
        }
        const response = await axios.post("/api/user", {
          email,
          password,
          phone,
        });
        if (response.data.success === true) handleClose();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      {/* <Button onClick={handleOpen}>Бүртгүүлэх</Button> */}
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
            Бүртгүүлэх
          </DialogTitle>
          <Typography>Шинээр бүртгэл үүсгэх </Typography>
          <DialogContent>
            <TextField
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              helperText={emailError}
              error={!!emailError}
              sx={{
                width: "22rem",
              }}
            />
            <TextField
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              helperText={passwordError}
              error={!!passwordError}
              sx={{
                width: "22rem",
              }}
            />
            <TextField
              label="Phone number"
              type="integer"
              onChange={(e) => setPhone(e.target.value)}
              margin="normal"
              helperText={phonedError}
              error={!!phonedError}
              sx={{
                width: "22rem",
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{
                margin: "auto",
                width: "22rem",
                height: "3rem",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              Бүртгүүлэх
            </Button>
          </DialogActions>
          <Divider
            sx={{
              marginTop: "1rem",
              marginBottom: "1rem",
              justifyContent: "center",
            }}
          >
            эсвэл
          </Divider>
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
            <Typography>Таньд хаяг бий юу? </Typography>
            <Button onClick={handleOpenLogin}>Нэвтрэх </Button>
          </Box>
        </Box>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={state.openSnackBar}
          autoHideDuration={6000}
          onClose={() => setState({ ...state, openSnackBar: false })}
        >
          <Alert
            onClose={() => setState({ ...state, openSnackBar: false })}
            severity="warning"
            sx={{ width: "100%" }}
          >
            {state.snackbarText}
          </Alert>
        </Snackbar>
      </Dialog>
    </>
  );
};

export default Register;
