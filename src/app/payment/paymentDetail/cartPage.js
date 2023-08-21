import React, { useCallback, useContext, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  Snackbar,
  Typography,
  FormControl,
  OutlinedInput,
  Alert,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SettingsSystemDaydream } from "@mui/icons-material";
import { UserContext } from "@/context/userContext";
import { useEffect } from "react";
import axios from "axios";

const ChargeWallet = ({ open, handleClose, ...props }) => {
  const { user } = useContext(UserContext);

  const userId = user._id;
  const [state, setState] = useState({
    cardNumber: "",
    cardholderName: "",
    expirationDate: "",
    cvv: "",
    balance: 0,
    payment: true,
    openSnackBar: false,
    snackbarText: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!state.cardNumber) {
      newErrors.cardNumber = "Заавал бөглөнө үү.";
    } else if (state.cardNumber.length !== 16) {
      newErrors.cardNumber = "Картны дугаар 16 урттай байх ёстой.";
    }

    if (!state.cardholderName) {
      newErrors.cardholderName = "Заавал бөглөнө үү.";
    }

    if (!state.expirationDate) {
      newErrors.expirationDate = "Заавал бөглөнө үү.";
    } else if (!/^\d{2}\/\d{2}$/.test(state.expirationDate)) {
      newErrors.expirationDate = "Формат буруу байна (MM/YY).";
    }

    if (!state.cvv) {
      newErrors.cvv = "Заавал бөглөнө үү.";
    } else if (state.cvv.length !== 3) {
      newErrors.cvv = "CVV 3 оронтой байна.";
    }

    if (Object.keys(newErrors).length > 0) {
      setState((prevData) => ({
        ...prevData,
        errors: newErrors,
      }));
    } else {
      setState({ payment: false });
    }
  };
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
        snackbarText:
          "Таны данс " + state.balance + " төгрөгөөр цэнэглэгдлээ. ",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "380px",
          },
        },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          marginTop: "1rem",
          justifyContent: "center",
        }}
        marginX={{ xs: 0 }}
      >
        <DialogTitle color="primary" fontWeight="bold">
          Хэтэвч цэнэглэх
        </DialogTitle>
        <Box
          margin={{ xs: "0 1rem 0 1rem", sm: "1rem", lg: "0 2rem 1rem 2rem" }}
        >
          {state.payment ? (
            <Box>
              <Typography>Картын дугаар / Pan:</Typography>
              <FormControl
                fullWidth
                size="small"
                error={!!state.errors?.cardNumber}
              >
                <OutlinedInput
                  name="cardNumber"
                  value={state.cardNumber}
                  onChange={handleInputChange}
                  inputProps={{ maxLength: 16 }}
                  placeholder="**** **** **** ****"
                />
                {state.errors?.cardNumber && (
                  <Typography variant="caption" color="error">
                    {state.errors.cardNumber}
                  </Typography>
                )}
              </FormControl>
              <Typography>Эзэмшигчийн нэр / Cardholder:</Typography>
              <FormControl
                fullWidth
                size="small"
                error={!!state.errors?.cardholderName}
              >
                <OutlinedInput
                  name="cardholderName"
                  value={state.cardholderName}
                  onChange={handleInputChange}
                  placeholder="Нэр оруулах"
                />
                {state.errors?.cardholderName && (
                  <Typography variant="caption" color="error">
                    {state.errors.cardholderName}
                  </Typography>
                )}
              </FormControl>
              <Box display="flex" flexDirection="row" marginTop="1rem">
                <Box>
                  <Typography fontSize="0.9rem">
                    Картын хугацаа / Expiration Date:
                  </Typography>
                  <FormControl
                    fullWidth
                    size="small"
                    error={!!state.errors?.expirationDate}
                  >
                    <OutlinedInput
                      name="expirationDate"
                      value={state.expirationDate}
                      onChange={handleInputChange}
                      inputProps={{ maxLength: 5 }}
                      placeholder="MM/YY"
                    />
                    {state.errors?.expirationDate && (
                      <Typography variant="caption" color="error">
                        {state.errors.expirationDate}
                      </Typography>
                    )}
                  </FormControl>
                </Box>
                <Box marginLeft="1rem" sx={{ width: "20%" }}>
                  <Typography fontSize="0.9rem">CVV</Typography>
                  <FormControl
                    fullWidth
                    size="small"
                    error={!!state.errors?.cvv}
                  >
                    <OutlinedInput
                      name="cvv"
                      value={state.cvv}
                      onChange={handleInputChange}
                      inputProps={{ maxLength: 3 }}
                      placeholder="CVV"
                    />
                    {state.errors?.cvv && (
                      <Typography variant="caption" color="error">
                        {state.errors.cvv}
                      </Typography>
                    )}
                  </FormControl>
                </Box>
              </Box>
              <DialogActions>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleSubmit}
                  endIcon={<ArrowForwardIosIcon />}
                  sx={{
                    margin: "1rem",
                    height: "3rem",
                    fontWeight: "bold",
                  }}
                  widthX={{ xs: "15rem" }}
                >
                  Үргэлжлүүлэх
                </Button>
              </DialogActions>
            </Box>
          ) : (
            <Box>
              <Box display="flex">
                <Typography>Таны өмнөх үлдэгдэл: </Typography>
                <Typography fontWeight="bold"> {user.balance}₮</Typography>
              </Box>

              <Typography padding="1rem 0 1rem 0">
                Цэнэглэх мөнгөн дүнгээ оруулна уу.
              </Typography>
              <TextField
                id="outlined-uncontrolled"
                label="Цэнэглэх дүн"
                fullWidth
                onChange={(e) =>
                  setState({ ...state, balance: e.target.value })
                }
              />
              <Box margin="1rem">
                <Button onClick={() => setState({ ...state, payment: true })}>
                  Буцах
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={rechargeWallet}
                  sx={{ marginLeft: "2rem" }}
                >
                  Цэнэглэх
                </Button>
              </Box>
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
          )}
        </Box>
      </Box>
    </Dialog>
  );
};

export default ChargeWallet;
