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

    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const specialCharsRegex = /[!@#$%^&*()]/;
    const uppercaseRegex = /[A-Z]/;

    if (!email) {
      setEmailError("Email -ээ оруулна уу.");
    } else if (!emailRegex.test(email)) {
      setEmailError("Email буруу байна.");
    } else {
      successCount++;
      setEmailError("");
    }
    if (!password) {
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

    const phoneRegex = /^\d{8}$/;
    if (!phoneRegex.test(phone.trim())) {
      setPhoneError("Утасны дугаараа оруулна уу.");
    } else {
      successCount++;
      setPhoneError("");
    }

    return successCount;
  };

  const handleSubmit = async () => {
    let num = 0;
    num = validation(); // Assuming validation returns 3 on success
    if (num === 3) {
      try {
        const response = await axios.get(`/api/user?email=${email}`);
        if (response.data.success === true) {
          console.log("Email аль хэдийн бүртгэгдсэн байна.");
          setState({
            openSnackBar: true,
            snackbarText: "Email аль хэдийн бүртгэгдсэн байна.",
          });
        } else {
          const createUserResponse = await axios.post("/api/user", {
            email,
            password,
            phone,
          });

          if (createUserResponse.data.success === true) {
            handleClose();
            setState({
              ...state,
              openSnackBar: true,
              snackbarText: "Амжилттай бүртгэгдлээ.",
            });
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
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
            Бүртгүүлэх
          </DialogTitle>
          <Typography>Шинээр бүртгэл үүсгэх </Typography>
          <DialogContent>
            <TextField
              label="Имэйл"
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
              helperText={emailError}
              error={!!emailError}
            />
            <TextField
              label="Нууц үг "
              type="password"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              helperText={passwordError}
              error={!!passwordError}
            />
            <TextField
              label="Утасны дугаар "
              type="integer"
              fullWidth
              onChange={(e) => setPhone(e.target.value)}
              margin="normal"
              helperText={phonedError}
              error={!!phonedError}
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
              sx={{
                margin: "0 1rem 0 1rem  ",
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
          <Typography>Таньд хаяг бий юу? </Typography>
          <Button onClick={handleOpenLogin}>Нэвтрэх </Button>
        </Box>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={state.openSnackBar}
          autoHideDuration={2000}
          onClose={() => setState({ ...state, openSnackBar: false })}
        >
          <Alert
            onClose={() => setState({ ...state, openSnackBar: false })}
            severity="error"
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
