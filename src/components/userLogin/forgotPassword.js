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
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
              sx={{
                margin: "0 1rem 0 1rem  ",
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
