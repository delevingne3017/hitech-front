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
} from "@mui/material";
import LoginForm from "./login";
import { useRouter } from "next/router";
const ForgotPass = ({
  open,
  handleOpen,
  handleClose,
  handleOpenLogin,
  ...props
}) => {
  const [username, setUsername] = useState("");
  const handleLogin = () => {
    alert("hi");
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
            Нууц үг сэргээх
          </DialogTitle>
          <Typography>Бүртгэлтэй имэйл хаягаа оруулна уу. </Typography>
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
          </DialogContent>
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
              Сэргээх
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
            <Button onClick={handleOpenLogin}>Нэвтрэх </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default ForgotPass;
