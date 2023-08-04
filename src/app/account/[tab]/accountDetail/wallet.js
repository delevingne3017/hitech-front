"use client";
import { useContext, useState } from "react";
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
import { UserContext } from "@/context/userContext";
export default function Wallet() {
  const { user } = useContext(UserContext);
  const [state, setState] = useState({
    balance: 0,
    openSnackBar: false,
    snackbarText: "",
  });
  const userId = user._id;

  const rechargeWallet = async () => {
    try {
      const previousBalance = parseInt(user.balance);
      const rechargeAmount = parseInt(state.balance);
      const newBalance = previousBalance + rechargeAmount;
      const response = await axios.put("/api/user/" + userId, {
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
      <Grid containe margin="2rem">
        <Typography fontSize={"1.5rem"} fontWeight="bold" paddingTop="2rem">
          Миний хэтэвч
        </Typography>
        <Grid item xs={12} sm={11} md={9} lg={5}>
          <Box
            sx={{
              margin: "1rem",
              borderRadius: "1rem",
              background: "rgb(255,145,0)",
              background:
                "linear-gradient(90deg, rgba(255,145,0,1) 22%, rgba(197,123,96,1) 70%)",
              boxShadow: 2,
              paddingBottom: "1rem",
            }}
          >
            <Typography margin="2rem" paddingTop={"2rem"}>
              Computer shop
            </Typography>
            <Typography margin="2rem">{user.email}</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "auto",
                border: "1px solid white",
                borderRadius: "0.8rem",
                width: "90%",
                height: "3rem",
              }}
            >
              <Typography marginLeft="2rem">
                Үлдэгдэл : ${user.balance}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Box>
          <Typography fontSize={"1.5rem"} fontWeight="bold">
            Хэтэвч цэнэглэх
          </Typography>
          <Grid item xs={12} lg={6}>
            <Box display={"flex"} padding=" 1rem 1rem 2rem 1rem">
              <TextField
                id="outlined-uncontrolled"
                label="Цэнэглэх дүн"
                onChange={(e) =>
                  setState({ ...state, balance: e.target.value })
                }
              />
              <Button
                variant="contained"
                color="primary"
                onClick={rechargeWallet}
              >
                Цэнэглэх
              </Button>
            </Box>
          </Grid>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={state.openSnackBar}
            autoHideDuration={2000}
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
      </Grid>
    </>
  );
}
