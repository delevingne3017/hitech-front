"use client";
import React from "react";
import {
  Box,
  Button,
  FormControl,
  OutlinedInput,
  Typography,
} from "@mui/material";

export default function NavProfile() {
  const updateUser = () => {};
  return (
    <>
      <Box sx={{ margin: "2rem" }}>
        <Typography fontSize={"1.5rem"}>Хувийн мэдээлэл</Typography>
        <Box>
          <FormControl
            sx={{
              width: "35rem",
              marginTop: "2rem",
              marginLeft: "2rem",
              marginBottom: "2rem",
            }}
          >
            <OutlinedInput placeholder="Нэр " />
          </FormControl>
          <FormControl
            sx={{
              width: "35rem",
              marginTop: "2rem",
              marginLeft: "2rem",
              marginBottom: "2rem",
            }}
          >
            <OutlinedInput placeholder="Овог" />
          </FormControl>
          <FormControl
            sx={{
              width: "35rem",
              marginTop: "2rem",
              marginLeft: "2rem",
              marginBottom: "2rem",
            }}
          >
            <OutlinedInput placeholder="Хаяг " />
          </FormControl>
          <FormControl
            sx={{ width: "35rem", marginTop: "2rem", marginLeft: "2rem" }}
          >
            <OutlinedInput placeholder="Утасны дугаар " />
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
        <Typography>Хүргэлтийн хаяг</Typography>
        <Box></Box>
      </Box>
    </>
  );
}
