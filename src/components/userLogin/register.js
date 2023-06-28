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

  const handleSubmit = async () => {
    // Validate email format
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (email.trim() === "") {
      setEmailError("Email -ээ оруулна уу.");
      return;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Email буруу байна.");
      return;
    }

    const specialCharsRegex = /[!@#$%^&*()]/;
    const uppercaseRegex = /[A-Z]/;
    if (password.trim() === "") {
      setEmailError("password -аа оруулна уу.");
      return;
    }
    if (password.length < 8) {
      setPasswordError("Password дорж хаяж 8 урттай байна.");
    } else if (!specialCharsRegex.test(password.trim())) {
      setPasswordError("Password тусгай тэмдэгт агуулна.");
    } else if (!uppercaseRegex.test(password.trim())) {
      setPasswordError("Password том жижиг үсэг агуулна.");
    } else {
      setPasswordError("");
    }

    const phoneRegex = /^\d{8}$/; // Matches 8 digits
    if (!phoneRegex.test(phone.trim())) {
      setPhoneError("Invalid phone number format");
      return;
    }
    try {
      const response = await axios.post("/api/user", {
        email,
        password,
        phone,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    // All validations passed, show success message
    alert("Form submitted successfully!");

    // Reset the form fields
    setEmail("");
    setPassword("");
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
            width: "30rem",
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
                width: "25rem",
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
                width: "25rem",
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
                width: "25rem",
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
                width: "25rem",
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
      </Dialog>
    </>
  );
};

export default Register;
