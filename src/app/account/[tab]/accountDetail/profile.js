"use client";
import React, { useCallback } from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { UserContext } from "@/context/userContext";

const NavProfile = () => {
  const { user } = useContext(UserContext);
  const [state, setState] = useState({
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    openSnackBar: false,
    snackbarText: "",
  });

  const userId = user._id;
  const updateUser = async () => {
    try {
      const userData = {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        phone: state.phone,
      };

      const response = await axios.put("/api/user/" + userId, userData);
      setState({
        ...state,
        openSnackBar: true,
        snackbarText: "Амжилттай шинэчлэгдлээ",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };

  useEffect(() => {
    setState({
      ...state,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      email: user.email,
    });
  }, []);

  return (
    <>
      <Box sx={{ margin: "2rem" }}>
        <Typography fontSize={"1.5rem"} fontWeight="bold" paddingTop="2rem">
          Хувийн мэдээлэл
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <FormControl fullWidth sx={{ marginTop: "1rem" }}>
              <TextField
                id="outlined-uncontrolled"
                label="Нэр"
                name="firstName"
                onChange={handleChange}
                value={state.firstName}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <FormControl fullWidth sx={{ marginTop: "1rem" }}>
              <TextField
                id="outlined-uncontrolled"
                label="Овог"
                name="lastName"
                onChange={handleChange}
                value={state.lastName}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <FormControl fullWidth sx={{ marginTop: "1rem" }}>
              <TextField
                id="outlined-uncontrolled"
                label="Имэйл"
                name="email"
                onChange={handleChange}
                value={state.email}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <FormControl type="phone" fullWidth sx={{ marginTop: "1rem" }}>
              <TextField
                id="outlined-uncontrolled"
                label="Утасны дугаар"
                name="phone"
                onChange={handleChange}
                value={state.phone}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Box>
              <Button
                fullWidth
                onClick={() => updateUser()}
                variant="contained"
                color="primary"
                sx={{
                  height: "2.3rem",
                  borderRadius: ".5rem",
                  marginTop: "1rem",
                }}
              >
                Хадгалах
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Typography fontSize={"1.5rem"} fontWeight="bold" paddingTop="2rem">
          Хүргэлтийн хаяг
        </Typography>
        <Box display={"flex"}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <Box
                sx={{
                  background: "#E6E6FA",
                  borderRadius: ".8rem",
                }}
              >
                <Typography
                  fontWeight={"bold"}
                  fontsize="1.6rem"
                  marginTop="1rem"
                  padding=" .5rem 0 0 1rem"
                >
                  Хаяг
                </Typography>
                <Typography padding=" .5rem 0 1rem 1rem">
                  Энд гэрийн хаягаа оруулна уу.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Box marginTop="1rem" marginBottom="2rem">
                <Button
                  fullWidth
                  sx={{
                    borderRadius: ".8rem",
                    border: "1px solid ",

                    height: "5rem",
                  }}
                >
                  Хаяг нэмэх +
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={state.openSnackBar}
            autoHideDuration={1500}
            onClose={() => setState({ ...state, openSnackBar: false })}
          >
            <Alert
              onClose={() => setState({ ...state, openSnackBar: false })}
              severity="success"
              sx={{ width: "100%" }}
            >
              {state.snackbarText}
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </>
  );
};
export default NavProfile;
