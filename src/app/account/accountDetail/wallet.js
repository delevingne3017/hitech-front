"use client";
import { useContext, useState } from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { UserContext } from "../../../context/userContext";
import axios from "axios";
export default function Wallet() {
  const { user } = useContext(UserContext);
  const [state, setState] = useState({
    balance: 0,
    openSnackBar: false,
    snackbarText: "",
  });
  const userId = user._id;

  const handleRecharge = async () => {
    try {
      const previousBalance = parseInt(user.balance);
      const rechargeAmount = parseInt(state.balance);
      const newBalance = previousBalance + rechargeAmount;
      const response = await axios.put("api/user/" + userId, {
        balance: newBalance,
      });
      setState({
        ...state,
        openSnackBar: true,
        snackbarText: "Амжилттай цэнэглэгдлээ.",
      });
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
              onChange={(e) => setState({ ...state, balance: e.target.value })}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleRecharge}
            >
              Цэнэглэх
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
}
