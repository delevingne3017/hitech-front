"use client";
import { useContext, useState } from "react";
import { Box, Typography } from "@mui/material";

export default function Wallet() {
  return (
    <>
      <Box margin="2rem">
        <Typography fontSize={"1.5rem"} fontWeight="bold">
          Миний хэтэвч
        </Typography>
        <Box
          sx={{
            margin: "2rem",
            width: "35rem",
            height: "18rem",
            borderRadius: "1rem",
            background: "rgb(255,145,0)",
            background:
              "linear-gradient(90deg, rgba(255,145,0,1) 22%, rgba(197,123,96,1) 70%)",
            boxShadow: 2,
          }}
        >
          <Typography margin="2rem" paddingTop={"3rem"}>
            Computer shop
          </Typography>
          <Typography margin="2rem">name</Typography>
          <Box
            sx={{
              margin: "auto",
              border: "1px solid white",
              borderRadius: "0.8rem",
              width: "90%",
              height: "4rem",
              marginTop: "4rem",
            }}
          >
            <Typography margin=".3rem" marginLeft="1rem">
              Үлдэгдэл :
            </Typography>
            <Typography margin=".3rem" marginLeft="1rem">
              $
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography fontSize={"1.5rem"} fontWeight="bold">
            Хэтэвч цэнэглэх
          </Typography>
        </Box>
      </Box>
    </>
  );
}
