"use client";
import React from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  OutlinedInput,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { UserContext } from "../userContext";
import { useContext } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useEffect } from "react";

const NavProfile = ({ params }) => {
  const { user } = useContext(UserContext);
  const [state, setState] = useState({
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    openSnackBar: false,
    snackbarText: "",
  });

  const userId = user.id;
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
        snackbarText: "Success",
      });
    } catch (error) {
      console.error(error);
    }
  };
  const form = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    validationSchema: yup.object({
      fname: yup.string().required("Заавал оруулна уу"),
      lname: yup.string().required("Заавал оруулна уу"),
      email: yup
        .string()
        .email("Зөв и-мэйл оруулна уу")
        .required("Заавал оруулна уу"),
      phone: yup
        .number()
        .min(50000000, "8 урттай байна")
        .max(99999999, "8 урттай байна")
        .required("Заавал оруулна уу"),
    }),
    updateUser,
  });

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
        <Typography fontSize={"1.5rem"} fontWeight="bold">
          Хувийн мэдээлэл
        </Typography>
        <Box>
          <FormControl
            sx={{
              width: "25rem",
              marginTop: "2rem",
              marginLeft: "2rem",
              marginBottom: "2rem",
            }}
          >
            <TextField
              id="outlined-uncontrolled"
              label="Нэр"
              name="firstName"
              onChange={handleChange}
              defaultValue={state.firstName}
            />
          </FormControl>
          <FormControl
            sx={{
              width: "25rem",
              marginTop: "2rem",
              marginLeft: "2rem",
              marginBottom: "2rem",
            }}
          >
            <TextField
              id="outlined-uncontrolled"
              label="Овог"
              name="lastName"
              onChange={handleChange}
              defaultValue={state.lastName}
            />
          </FormControl>
          <FormControl
            sx={{
              width: "25rem",
              marginTop: "2rem",
              marginLeft: "2rem",
              marginBottom: "2rem",
            }}
          >
            <TextField
              id="outlined-uncontrolled"
              label="Имэйл"
              name="email"
              onChange={handleChange}
              defaultValue={state.email}
            />
          </FormControl>
          <FormControl
            type="phone"
            sx={{ width: "25rem", marginTop: "2rem", marginLeft: "2rem" }}
          >
            <TextField
              id="outlined-uncontrolled"
              label="Утасны дугаар"
              name="phone"
              onChange={handleChange}
              defaultValue={state.phone}
            />
          </FormControl>
        </Box>
        <Box>
          <Button
            onClick={updateUser}
            variant="contained"
            color="primary"
            sx={{
              width: "10rem",
              height: "2.3rem",
              margin: "2rem",
              borderRadius: ".5rem",
            }}
          >
            Хадгалах
          </Button>
        </Box>
        <Typography fontSize={"1.5rem"} fontWeight="bold">
          Хүргэлтийн хаяг
        </Typography>
        <Box display={"flex"}>
          <Box
            sx={{
              width: "20rem",
              height: "8rem",
              background: "#E6E6FA",
              margin: "2rem",
              borderRadius: ".8rem",
            }}
          >
            <Typography fontWeight={"bold"} fontsize="1.6rem" margin={"1rem"}>
              Хаяг
            </Typography>
            <Typography paddingLeft={"1rem"}>
              Энд гэрийн хаягаа оруулна уу.
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{
                width: "20rem",
                height: "8rem",
                margin: "2rem",
                borderRadius: ".8rem",
                border: "1px solid ",
              }}
            >
              Хаяг нэмэх +
            </Button>
          </Box>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={state.openSnackBar}
            autoHideDuration={6000}
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
