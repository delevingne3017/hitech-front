"use client";
import React from "react";
import {
  Box,
  Button,
  FormControl,
  OutlinedInput,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { UserContext } from "../userContext";
import { useContext } from "react";
import * as yup from "yup";
import { useFormik } from "formik";

const NavProfile = ({ params }) => {
  const { user } = useContext(UserContext);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const userId = user.id;
  const updateUser = async () => {
    try {
      const userData = {
        fname,
        lname,
        email,
        phone,
      };

      const response = await axios.put("/api/user/" + userId, userData);
    } catch (error) {
      console.error(error);
    }
  };
  const form = useFormik({
    initialValues: {
      fname: "",
      lname: "",
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

  return (
    <>
      <Box sx={{ margin: "2rem" }}>
        <Typography fontSize={"1.5rem"} fontWeight="bold">
          Хувийн мэдээлэл
        </Typography>
        <Box>
          <FormControl
            sx={{
              width: "35rem",
              marginTop: "2rem",
              marginLeft: "2rem",
              marginBottom: "2rem",
            }}
          >
            <OutlinedInput
              name="fname"
              error={Boolean(form.errors.fname)}
              helperText={form.errors.fname}
              onChange={form.handleChange}
              placeholder="Нэр "
            />
          </FormControl>
          <FormControl
            sx={{
              width: "35rem",
              marginTop: "2rem",
              marginLeft: "2rem",
              marginBottom: "2rem",
            }}
          >
            <OutlinedInput
              onChange={(e) => setLname(e.target.value)}
              placeholder="Овог"
            />
          </FormControl>
          <FormControl
            sx={{
              width: "35rem",
              marginTop: "2rem",
              marginLeft: "2rem",
              marginBottom: "2rem",
            }}
          >
            <OutlinedInput
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Хаяг "
            />
          </FormControl>
          <FormControl
            type="phone"
            sx={{ width: "35rem", marginTop: "2rem", marginLeft: "2rem" }}
          >
            <OutlinedInput
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Утасны дугаар "
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
              height: "3rem",
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
              width: "25rem",
              height: "10rem",
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
                width: "25rem",
                height: "10rem",
                margin: "2rem",
                borderRadius: ".8rem",
                border: "1px solid ",
              }}
            >
              Хаяг нэмэх +
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default NavProfile;
