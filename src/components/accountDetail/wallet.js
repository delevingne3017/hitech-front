"use client";
import { useContext, useEffect, useState } from "react";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { UserContext } from "../../context/userContext";
import { ConstructionOutlined } from "@mui/icons-material";
import axios from "axios";
export default function Wallet() {
  const { user } = useContext(UserContext);
  const [balance, setBalance] = useState("");
  const userId = user.id;

  const handleLogin = async () => {
    console.log("hi");
    console.log("data", balance);
    try {
      const response = await axios.put("api/user/" + userId, { balance });
      console.log("er", response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Box margin="2rem">
        <Typography fontSize={"1.5rem"} fontWeight="bold">
          Миний хэтэвч
        </Typography>
        <Box
          sx={{
            margin: "2rem",
            width: "28rem",
            height: "15rem",
            borderRadius: "1rem",
            background: "rgb(255,145,0)",
            background:
              "linear-gradient(90deg, rgba(255,145,0,1) 22%, rgba(197,123,96,1) 70%)",
            boxShadow: 2,
          }}
        >
          <Typography margin="2rem" paddingTop={"2rem"}>
            Computer shop
          </Typography>
          <Typography margin="2rem">{user.email}</Typography>
          <Box
            sx={{
              margin: "auto",
              border: "1px solid white",
              borderRadius: "0.8rem",
              width: "90%",
              height: "4rem",
              marginTop: "2rem",
            }}
          >
            <Typography margin=".3rem" marginLeft="1rem">
              Үлдэгдэл :
            </Typography>
            <Typography margin=".3rem" marginLeft="1rem">
              $ {user.balance}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography fontSize={"1.5rem"} fontWeight="bold">
            Хэтэвч цэнэглэх
          </Typography>
          <Box display={"flex"}>
            <TextField
              id="outlined-uncontrolled"
              label="Цэнэглэх дүн"
              onChange={(e) => setBalance(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleLogin}>
              Цэнэглэх
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
